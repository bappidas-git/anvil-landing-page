/* ============================================
   useLeadFormMachine
   State machine for the 3-step Anvil lead form.
   Owns per-step validation, context (injected from
   the calling section), and the webhook/analytics
   submission pipeline. Consumed by MultiStepLeadForm.
   ============================================ */

import { useCallback, useMemo, useReducer } from "react";
import {
  submitLeadToWebhook,
  isDuplicateLead,
  markLeadAsSubmitted,
} from "../../../utils/webhookSubmit";
import { trackFormSubmission } from "../../../utils/gtm";
import { trackLead as trackMetaLead } from "../../../utils/metaPixel";
import { sendLeadEvent } from "../../../utils/metaCAPI";
import { generateEventId } from "../../../utils/eventDedup";
import { trackFormSubmission as trackGoogleAdsFormSubmission } from "../../../utils/googleAds";
import { sendEnhancedConversionData } from "../../../utils/enhancedConversions";
import {
  getNameErrorMessage,
  getMobileErrorMessage,
  getEmailErrorMessage,
} from "../../../utils/validators";
import { showError, showInfo } from "../../../utils/swalHelper";

const INITIAL_DATA = {
  monthlyBill: "",
  state: "",
  propertyType: "",
  roofType: "",
  systemPreference: "",
  name: "",
  mobile: "",
  email: "",
  consent: false,
};

const INITIAL_CONTEXT = {
  source: "hero",
  solution: null,
  calculatorSnapshot: null,
};

const buildInitialState = (initialContext = {}) => ({
  step: 1,
  data: { ...INITIAL_DATA },
  errors: {},
  isSubmitting: false,
  context: { ...INITIAL_CONTEXT, ...initialContext },
});

// ----- reducer -----

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD": {
      const { field, value } = action;
      const nextErrors = { ...state.errors };
      if (nextErrors[field]) delete nextErrors[field];
      return {
        ...state,
        data: { ...state.data, [field]: value },
        errors: nextErrors,
      };
    }
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    case "GO_NEXT":
      return { ...state, step: state.step === 3 ? 3 : state.step + 1, errors: {} };
    case "GO_BACK":
      if (state.step === 1 || state.step === "success") return state;
      return { ...state, step: state.step - 1, errors: {} };
    case "SET_SUBMITTING":
      return { ...state, isSubmitting: action.value };
    case "SET_STEP":
      return { ...state, step: action.step, errors: {} };
    default:
      return state;
  }
};

// ----- validators per step -----

const validateStep1 = (data) => {
  const errors = {};
  if (!data.monthlyBill) errors.monthlyBill = "Select your average bill range";
  if (!data.state) errors.state = "Select your state";
  return errors;
};

const validateStep2 = (data) => {
  const errors = {};
  if (!data.propertyType) errors.propertyType = "Select your property type";
  if (!data.roofType) errors.roofType = "Select your roof type";
  if (!data.systemPreference)
    errors.systemPreference = "Select a system preference";
  return errors;
};

const validateStep3 = (data) => {
  const errors = {};
  const nameErr = getNameErrorMessage(data.name);
  if (nameErr) errors.name = nameErr;

  const mobileErr = getMobileErrorMessage(data.mobile);
  if (mobileErr) errors.mobile = mobileErr;

  if (data.email) {
    const emailErr = getEmailErrorMessage(data.email);
    if (emailErr) errors.email = emailErr;
  }

  if (!data.consent) {
    errors.consent = "Please accept the terms to continue";
  }
  return errors;
};

const validateStep = (step, data) => {
  if (step === 1) return validateStep1(data);
  if (step === 2) return validateStep2(data);
  if (step === 3) return validateStep3(data);
  return {};
};

// ----- message serialization -----

const buildEnrichedMessage = (data, context) => {
  const parts = [
    data.monthlyBill && `Bill: ₹${data.monthlyBill}`,
    data.state && `State: ${data.state}`,
    data.propertyType && `Property: ${data.propertyType}`,
    data.roofType && `Roof: ${data.roofType}`,
    data.systemPreference && `System: ${data.systemPreference}`,
    context?.solution && `Solution: ${context.solution}`,
  ];

  if (context?.calculatorSnapshot) {
    const snap = context.calculatorSnapshot;
    const snapParts = [
      snap.estimatedSavings != null &&
        `Est. savings: ₹${snap.estimatedSavings}`,
      snap.systemKw != null && `System: ${snap.systemKw} kW`,
      snap.payback != null && `Payback: ${snap.payback} yrs`,
    ].filter(Boolean);
    if (snapParts.length) parts.push(`Calculator: ${snapParts.join(", ")}`);
  }

  return parts.filter(Boolean).join(" | ");
};

// ----- hook -----

const useLeadFormMachine = (initialContext = {}) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialContext,
    buildInitialState
  );

  const setField = useCallback((field, value) => {
    let coerced = value;
    if (field === "mobile" && typeof value === "string") {
      coerced = value.replace(/\D/g, "").slice(0, 10);
    }
    dispatch({ type: "SET_FIELD", field, value: coerced });
  }, []);

  const next = useCallback(() => {
    const currentStep = state.step;
    if (currentStep === "success") return;
    const errors = validateStep(currentStep, state.data);
    if (Object.keys(errors).length > 0) {
      dispatch({ type: "SET_ERRORS", errors });
      return false;
    }
    dispatch({ type: "GO_NEXT" });
    return true;
  }, [state.step, state.data]);

  const back = useCallback(() => {
    dispatch({ type: "GO_BACK" });
  }, []);

  const submit = useCallback(
    async ({ onSuccess, onClose } = {}) => {
      if (state.isSubmitting) return { success: false };
      if (state.step !== 3) return { success: false };

      const errors = validateStep3(state.data);
      if (Object.keys(errors).length > 0) {
        dispatch({ type: "SET_ERRORS", errors });
        return { success: false, errors };
      }

      const { data, context } = state;

      if (isDuplicateLead(data.mobile, data.email)) {
        await showInfo(
          "Already Registered!",
          "An enquiry with this mobile number or email has already been submitted. Our team will contact you soon."
        );
        return { success: false, duplicate: true };
      }

      dispatch({ type: "SET_SUBMITTING", value: true });

      const enrichedMessage = buildEnrichedMessage(data, context);
      const source = context.source || "general";

      const leadData = {
        name: data.name.trim(),
        mobile: data.mobile.trim(),
        email: data.email.trim(),
        service_interest: context.solution || data.systemPreference || "",
        message: enrichedMessage || "",
        source,
      };

      try {
        const result = await submitLeadToWebhook(leadData);

        if (!result.success) {
          await showError("Oops!", result.message);
          dispatch({ type: "SET_SUBMITTING", value: false });
          return { success: false };
        }

        trackFormSubmission(source, {
          serviceInterest: leadData.service_interest,
        });

        const metaEventId = generateEventId();
        trackMetaLead({
          event_id: metaEventId,
          content_name: source,
          content_category: "lead_generation",
        });
        sendLeadEvent({
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          event_id: metaEventId,
          source,
        }).catch((err) => {
          console.error("[MetaCAPI] Lead event failed:", err);
        });

        trackGoogleAdsFormSubmission(source);
        sendEnhancedConversionData(data.email, data.mobile, data.name).catch(
          (err) => {
            console.error("[EnhancedConversions] Failed:", err);
          }
        );

        markLeadAsSubmitted(data.mobile);
        sessionStorage.setItem("lead_submitted", "true");
        sessionStorage.setItem("lead_name", data.name);

        dispatch({ type: "SET_STEP", step: "success" });
        dispatch({ type: "SET_SUBMITTING", value: false });

        if (onSuccess) onSuccess({ ...data });
        if (onClose) onClose();

        return { success: true };
      } catch (error) {
        console.error("Lead submission error:", error);
        await showError(
          "Something went wrong",
          "Please try again or call us directly at 1800 2020 001."
        );
        dispatch({ type: "SET_SUBMITTING", value: false });
        return { success: false };
      }
    },
    [state]
  );

  const actions = useMemo(
    () => ({ setField, next, back, submit }),
    [setField, next, back, submit]
  );

  return { state, dispatch, actions };
};

export default useLeadFormMachine;
