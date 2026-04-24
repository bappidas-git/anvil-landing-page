/* ============================================
   MultiStepLeadForm (shell)
   Three-step lead capture wizard. This file wires
   up the state machine, step indicator, step shell
   and success card. Step UIs (bill/state selectors,
   property questions, contact fields) land in
   prompts 06–08 and will be swapped into the
   placeholders below.
   ============================================ */

import React from "react";
import { AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import StepIndicator from "./StepIndicator";
import StepShell from "./steps/StepShell";
import Step1BillRegion from "./steps/Step1BillRegion";
import useLeadFormMachine from "./useLeadFormMachine";
import styles from "./MultiStepLeadForm.module.css";

const STEP_LABELS = ["Your home", "Rooftop", "Contact"];

const WHATSAPP_HREF =
  "https://wa.me/911800202001?text=Hi%20Anvil%2C%20I%20just%20submitted%20a%20rooftop%20solar%20enquiry.";

const variantClass = (variant) => {
  switch (variant) {
    case "dark":
      return styles.wrapperDark;
    case "drawer":
      return styles.wrapperDrawer;
    default:
      return styles.wrapperDefault;
  }
};

const MultiStepLeadForm = ({
  source = "hero",
  solution = null,
  calculatorSnapshot = null,
  variant = "default",
  onClose,
  onSuccess,
}) => {
  const { state, actions } = useLeadFormMachine({
    source,
    solution,
    calculatorSnapshot,
  });

  const { step, isSubmitting } = state;

  const handlePrimary = () => {
    if (step === 3) {
      actions.submit({ onSuccess, onClose });
    } else {
      actions.next();
    }
  };

  const renderStepBody = () => {
    if (step === 1) {
      return (
        <StepShell
          stepKey="step-1"
          title="Quick question 1 of 3"
          subtitle="Tell us about your bill and location."
          onPrimary={handlePrimary}
          showBack={false}
          primaryLabel="Continue"
          isSubmitting={isSubmitting}
        >
          <Step1BillRegion
            data={state.data}
            errors={state.errors}
            onChange={actions.setField}
          />
        </StepShell>
      );
    }

    if (step === 2) {
      return (
        <StepShell
          stepKey="step-2"
          title="A bit about your rooftop"
          subtitle="Helps us match the right system for your home."
          onBack={actions.back}
          onPrimary={handlePrimary}
          primaryLabel="Continue"
          isSubmitting={isSubmitting}
        >
          <div data-testid="multistep-placeholder-2">
            Step 2 placeholder — see prompt 07.md
          </div>
        </StepShell>
      );
    }

    if (step === 3) {
      return (
        <StepShell
          stepKey="step-3"
          title="Where should Anvil Saathi call you?"
          subtitle="Your details stay private — we'll only use them to send your plan."
          onBack={actions.back}
          onPrimary={handlePrimary}
          primaryLabel="Get My Free Savings Plan"
          primaryIcon="mdi:calendar-check"
          isSubmitting={isSubmitting}
        >
          <div data-testid="multistep-placeholder-3">
            Step 3 placeholder — see prompt 08.md
          </div>
        </StepShell>
      );
    }

    return null;
  };

  if (step === "success") {
    const firstName = (state.data.name || "").trim().split(/\s+/)[0] || "there";
    return (
      <div className={`${styles.wrapper} ${variantClass(variant)}`}>
        <div className={styles.successCard}>
          <div className={styles.successBadge}>
            <Icon icon="mdi:check-circle" />
          </div>
          <h3 className={styles.successTitle}>
            Thank you, {firstName}!
          </h3>
          <p className={styles.successLead}>
            Your Anvil Saathi will be in touch within 24 hours.
          </p>
          <ul className={styles.successSteps}>
            <li>
              <Icon icon="mdi:phone-in-talk" aria-hidden="true" />
              <span>Quick WhatsApp / call from your Saathi</span>
            </li>
            <li>
              <Icon icon="mdi:home-search" aria-hidden="true" />
              <span>Free site survey at a time that suits you</span>
            </li>
            <li>
              <Icon icon="mdi:file-chart" aria-hidden="true" />
              <span>Personalised savings plan with subsidy & EMI options</span>
            </li>
          </ul>
          <a
            className={styles.whatsappButton}
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:whatsapp" />
            <span>Talk on WhatsApp</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.wrapper} ${variantClass(variant)}`}>
      <div className={styles.indicatorWrap}>
        <StepIndicator current={step} total={3} labels={STEP_LABELS} />
      </div>

      <div className={styles.stepStage}>
        <AnimatePresence mode="wait" initial={false}>
          {renderStepBody()}
        </AnimatePresence>
      </div>

      <div className={styles.footerTrust}>
        <span>✓ 60-second form</span>
        <span>✓ Free, no obligation</span>
        <span>✓ WhatsApp friendly</span>
      </div>
    </div>
  );
};

export default MultiStepLeadForm;
