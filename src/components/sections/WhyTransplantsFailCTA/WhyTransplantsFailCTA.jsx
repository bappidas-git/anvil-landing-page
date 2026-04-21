/* ============================================
   WhyTransplantsFailCTA Component
   "Why Solar Installations Fail — and how Anvil
   prevents it" objection handler section.
   Note: filename/component name kept stable to
   preserve existing App.jsx routing.
   ============================================ */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useModal } from "../../../context/ModalContext";
import { trackCTAClick } from "../../../utils/gtm";
import styles from "./WhyTransplantsFailCTA.module.css";

// Six common solar-install failure modes — each with the Anvil fix
const failureModes = [
  {
    icon: "mdi:alert-decagram",
    title: "Wrong panel specs for the roof",
    problem:
      "Undersized panels for the household's real load — bills barely move.",
    fix: "Anvil sizes the array from 12 months of your actual consumption, not a quick eyeball.",
  },
  {
    icon: "mdi:cable-data",
    title: "Cheap DC cabling & earthing",
    problem:
      "Fire risk, voltage drops, and broken inverters within 2–3 years.",
    fix: "Copper DC cable, proper earthing pits, and IP-65 rated combiner boxes on every install.",
  },
  {
    icon: "mdi:file-remove",
    title: "Subsidy paperwork stuck in DISCOM",
    problem:
      "Customers wait months for PM Surya Ghar disbursal — or never get it.",
    fix: "Anvil's paperwork team tracks every application until the subsidy hits your bank.",
  },
  {
    icon: "mdi:wrench-off",
    title: "Installer vanishes post-install",
    problem: "No AMC, no phone support, and warranty claims nobody honours.",
    fix: "Every Anvil customer keeps their Saathi for life, with a 5-year workmanship warranty.",
  },
  {
    icon: "mdi:solar-panel-large",
    title: "No monitoring = hidden underperformance",
    problem:
      "You only notice low output when your bill arrives months later.",
    fix: "Live app monitoring + monthly performance reports from Anvil.",
  },
  {
    icon: "mdi:shield-off",
    title: "Fake warranties",
    problem: "Generic 'lifetime' claims with no OEM backing.",
    fix: "Real OEM warranties on panels + inverter, countersigned by Anvil.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const WhyTransplantsFailCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { openLeadDrawer } = useModal();

  const handleOpenLeadForm = () => {
    trackCTAClick(
      "why_solar_fail_book_call",
      "why_solar_fail_cta",
      "Book Your Free Call",
    );
    openLeadDrawer("request-callback");
  };

  return (
    <section
      id="why-solar-installs-fail"
      className={styles.section}
      ref={ref}
      aria-labelledby="why-fail-title"
    >
      {/* Decorative background */}
      <div className={styles.bgDecor} aria-hidden="true" />
      <div className={styles.bgGlowOne} aria-hidden="true" />
      <div className={styles.bgGlowTwo} aria-hidden="true" />

      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.wrapper}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.header}>
            <span className={styles.badge}>
              <Icon
                icon="mdi:solar-power-variant"
                className={styles.badgeIcon}
              />
              Before you go solar
            </span>
            <Typography
              id="why-fail-title"
              variant="h2"
              className={styles.title}
            >
              Why most <span className={styles.accent}>bad</span> solar installs
              fail — and how Anvil prevents it.
            </Typography>
            <Typography className={styles.subtitle} sx={{ marginTop: "20px" }}>
              We've audited hundreds of failed rooftops. Here's what actually
              goes wrong — and the checklist we follow on every Anvil
              installation.
            </Typography>
          </motion.div>

          {/* Failure Mode Cards */}
          <div className={styles.reasonsGrid}>
            {failureModes.map((mode, index) => (
              <motion.article
                key={mode.title}
                className={styles.reasonCard}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className={styles.reasonIconWrap}>
                  <Icon icon={mode.icon} className={styles.reasonIcon} />
                  <span className={styles.reasonNumber}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className={styles.reasonTitle}>{mode.title}</h3>

                <div className={styles.problemBlock}>
                  <span className={styles.problemLabel}>
                    <Icon
                      icon="mdi:close-circle"
                      className={styles.problemLabelIcon}
                    />
                    What goes wrong
                  </span>
                  <p className={styles.reasonDescription}>{mode.problem}</p>
                </div>

                <div className={styles.fixBlock}>
                  <span className={styles.fixLabel}>
                    <Icon
                      icon="mdi:check-decagram"
                      className={styles.fixLabelIcon}
                    />
                    The Anvil fix
                  </span>
                  <p className={styles.fixDescription}>{mode.fix}</p>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div variants={itemVariants} className={styles.ctaCard}>
            <h3 className={styles.ctaTitle}>
              Every Anvil install avoids all six.{" "}
              <span className={styles.ctaTitleAccent}>Guaranteed.</span>
            </h3>
            <button
              type="button"
              className={styles.ctaButton}
              onClick={handleOpenLeadForm}
            >
              <Icon icon="mdi:phone-in-talk" className={styles.ctaButtonIcon} />
              <span>Book Your Free Call</span>
            </button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyTransplantsFailCTA;
