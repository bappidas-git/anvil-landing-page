/* ============================================
   StepShell
   Wraps each step body with a horizontal slide
   transition and the shared bottom nav row.
   ============================================ */

import React from "react";
import { motion } from "framer-motion";
import { CircularProgress } from "@mui/material";
import { Icon } from "@iconify/react";
import Button from "../../Button/Button";
import shellStyles from "../MultiStepLeadForm.module.css";

const slideVariants = {
  enter: { opacity: 0, x: 24 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
};

const StepShell = ({
  stepKey,
  title,
  subtitle,
  children,
  onBack,
  onPrimary,
  primaryLabel = "Continue",
  primaryIcon = "mdi:arrow-right",
  showBack = true,
  isSubmitting = false,
  direction = 1,
}) => {
  return (
    <motion.div
      key={stepKey}
      className={shellStyles.stepShell}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
      custom={direction}
    >
      <header className={shellStyles.stepHeader}>
        {title && <h3 className={shellStyles.stepTitle}>{title}</h3>}
        {subtitle && <p className={shellStyles.stepSubtitle}>{subtitle}</p>}
      </header>

      <div className={shellStyles.stepBody}>{children}</div>

      <div className={shellStyles.stepNav}>
        {showBack ? (
          <button
            type="button"
            className={shellStyles.backButton}
            onClick={onBack}
            disabled={isSubmitting}
          >
            <Icon icon="mdi:arrow-left" />
            <span>Back</span>
          </button>
        ) : (
          <span className={shellStyles.backSpacer} aria-hidden="true" />
        )}

        <Button
          type="button"
          variant="primary"
          onClick={onPrimary}
          disabled={isSubmitting}
          className={shellStyles.primaryButton}
        >
          {isSubmitting ? (
            <span className={shellStyles.loadingState}>
              <CircularProgress size={18} color="inherit" />
              <span>Submitting...</span>
            </span>
          ) : (
            <>
              <span>{primaryLabel}</span>
              {primaryIcon && <Icon icon={primaryIcon} />}
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
};

export default StepShell;
