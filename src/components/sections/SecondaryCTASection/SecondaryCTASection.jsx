/* ============================================
   SecondaryCTASection Component
   Limited-period offer banner — final nudge for fence-sitters
   ============================================ */

import React from "react";
import { Container } from "@mui/material";
import { motion } from "framer-motion";
import { useModal } from "../../../context/ModalContext";
import { trackCTAClick } from "../../../utils/gtm";
import Button from "../../common/Button/Button";
import styles from "./SecondaryCTASection.module.css";

const SecondaryCTASection = () => {
  const { openLeadDrawer } = useModal();

  const handleOpenLeadForm = () => {
    trackCTAClick(
      "secondary_cta_consultation",
      "secondary_cta",
      "Claim Free Consultation",
    );
    openLeadDrawer("book-meeting");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="secondary-cta" className={styles.section}>
      <div className={styles.bgPattern} />

      <Container maxWidth="lg">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className={styles.ctaInner}>
            <motion.span variants={itemVariants} className={styles.eyebrow}>
              ⚡ Limited-period offer
            </motion.span>

            <motion.h2 variants={itemVariants} className={styles.ctaTitle}>
              Go solar this month.{" "}
              <span className={styles.accent}>
                We cover your PM Surya Ghar paperwork — free.
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className={styles.ctaSubtitle}>
              Book your free consultation before month-end and we'll handle the
              subsidy filing, DISCOM coordination, and loan processing at zero
              cost. Saving starts from day one.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.ctaButtons}>
              <Button
                onClick={handleOpenLeadForm}
                variant="primary"
                size="large"
              >
                Claim Free Consultation
              </Button>
              <a href="tel:+918002020001" className={styles.callLink}>
                or call 1800 2020 001
              </a>
            </motion.div>

            <motion.ul variants={itemVariants} className={styles.ctaBullets}>
              <li>✓ Free site survey</li>
              <li>✓ Personalised savings plan</li>
              <li>✓ Zero obligation</li>
            </motion.ul>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SecondaryCTASection;
