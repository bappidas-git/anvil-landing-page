/* ============================================
   HighlightsSection Component - How It Works
   Visualises Anvil's customer journey from first call to commissioned system
   ============================================ */

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import { useModal } from "../../../context/ModalContext";
import styles from "./HighlightsSection.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Customer journey — 5 steps from first call to lifetime support
const steps = [
  {
    step: "01",
    icon: "mdi:phone-in-talk",
    title: "Free Call",
    description:
      "Share your state, monthly bill, and roof type. Your Anvil Saathi calls within 30 minutes with a preliminary savings plan.",
  },
  {
    step: "02",
    icon: "mdi:home-search",
    title: "Site Survey & Custom Design",
    description:
      "Our engineer visits your roof, captures measurements, and designs a system tailored to your load and shading profile.",
  },
  {
    step: "03",
    icon: "mdi:file-document-check",
    title: "Paperwork & Subsidy",
    description:
      "We handle the PM Surya Ghar application, DISCOM approval, net metering, and loan processing — end to end.",
  },
  {
    step: "04",
    icon: "mdi:solar-power",
    title: "Install & Commission",
    description:
      "Installation completes in 2–4 days. Your system goes live once the DISCOM approves — typically within 3–6 weeks total.",
  },
  {
    step: "05",
    icon: "mdi:chart-line",
    title: "Monitor & Support",
    description:
      "Track live output, savings, and CO₂ offset in the Anvil app. Anvil Saathi stays on call for the life of your system.",
  },
];

const HighlightsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { openLeadDrawer } = useModal();

  const handleOpenLeadForm = () => {
    openLeadDrawer("get-details");
  };

  return (
    <section className={styles.resultsSection} id="results" ref={ref}>
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>HOW IT WORKS</span>
            <Typography
              variant="h2"
              className={styles.sectionTitle}
              sx={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
                color: "var(--primary-dark)",
                marginTop: "0.75rem",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              From first call to first kilowatt in{" "}
              <span className={styles.accent}>as little as 3 weeks.</span>
            </Typography>
            <div className={styles.titleUnderline}>
              <span className={styles.underlineBar} />
            </div>
            <Typography className={styles.sectionSubtitle}>
              Your Anvil Saathi owns every step. You only focus on the savings.
            </Typography>
          </motion.div>

          {/* Step Cards Grid */}
          <motion.div variants={itemVariants} className={styles.highlightsGrid}>
            {steps.map((card, index) => (
              <motion.div
                key={card.step}
                className={styles.highlightCard}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.2 + index * 0.12 }}
              >
                <div className={styles.highlightImageWrap}>
                  <span className={styles.stepNumber}>{card.step}</span>
                  <Icon
                    icon={card.icon}
                    className={styles.stepIcon}
                    aria-hidden="true"
                  />
                </div>
                <div className={styles.highlightContent}>
                  <Typography className={styles.highlightTitle}>
                    {card.title}
                  </Typography>
                  <Typography className={styles.highlightDesc}>
                    {card.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Banner */}
          <motion.div variants={itemVariants} className={styles.ctaBanner}>
            <div className={styles.ctaBannerContent}>
              <div className={styles.ctaIconWrap}>
                <Icon icon="mdi:phone-in-talk" />
              </div>
              <div className={styles.ctaTextBlock}>
                <Typography
                  className={styles.ctaHeading}
                  sx={{ color: "var(--white)", fontWeight: "bold" }}
                >
                  Ready to start saving on your electricity bill?
                </Typography>
                <Typography
                  className={styles.ctaDesc}
                  sx={{ color: "var(--white)" }}
                >
                  Zero obligation. Zero hard sell. Your Anvil Saathi calls you
                  back within 30 minutes with a preliminary savings plan.
                </Typography>
              </div>
              <motion.button
                className={styles.ctaButton}
                onClick={handleOpenLeadForm}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Start With a Free Call</span>
                <Icon icon="mdi:arrow-right" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HighlightsSection;
