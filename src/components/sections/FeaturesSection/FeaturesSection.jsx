/* ============================================
   FeaturesSection Component - Why Choose Anvil
   Tabbed benefits showcase with solar highlights and CTA
   ============================================ */

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Container, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import { useModal } from "../../../context/ModalContext";
import { featuresData } from "../../../data/featuresData";
import styles from "./FeaturesSection.module.css";

// Category icons keyed by category name
const categoryIcons = {
  "Solar Technology": "mdi:solar-panel-large",
  "Full-Service Install": "mdi:handshake",
  "Trust & Warranty": "mdi:shield-check",
};

// Accent icons for decorative display
const categoryAccentIcons = {
  "Solar Technology": "mdi:solar-power",
  "Full-Service Install": "mdi:account-hard-hat",
  "Trust & Warranty": "mdi:shield-sun",
};

// Solar highlights strip items
const solarHighlights = [
  { icon: "mdi:solar-panel", label: "Tier-1 Panels" },
  { icon: "mdi:chip", label: "Smart Inverters" },
  { icon: "mdi:battery-charging-high", label: "Lithium Backup" },
  { icon: "mdi:handshake", label: "Anvil Saathi" },
  { icon: "mdi:file-document-check", label: "Subsidy Paperwork" },
  { icon: "mdi:chart-line", label: "Live Tracking" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState(featuresData[0]?.category);
  const { openLeadDrawer } = useModal();

  const handleOpenLeadForm = () => {
    openLeadDrawer("book-meeting");
  };

  const activeCategory =
    featuresData.find((c) => c.category === activeTab) || featuresData[0];

  return (
    <section className={styles.benefitsSection} id="why-us" ref={ref}>
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <Typography
              className={styles.overline}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: { xs: "0.75rem", md: "0.85rem" },
                color: "#FFB800",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textAlign: "center",
                marginBottom: "0.5rem",
              }}
            >
              Built for India
            </Typography>
            <Typography
              variant="h2"
              className={styles.sectionTitle}
              sx={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2.25rem" },
                color: "#0A1F3D",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              Better solar. <span className={styles.accentText}>Less hassle.</span>
            </Typography>
            <Typography
              className={styles.sectionSubtitle}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: { xs: "0.875rem", md: "1.05rem" },
                color: "#546E7A",
                textAlign: "center",
                marginTop: "0.75rem",
              }}
            >
              Every Anvil installation is engineered, warrantied, and supported
              by a team that actually picks up the phone.
            </Typography>
          </motion.div>

          {/* Category Tabs - Desktop */}
          <motion.div variants={itemVariants} className={styles.categoryTabs}>
            {featuresData.map((category) => (
              <button
                key={category.category}
                className={`${styles.categoryTab} ${
                  activeTab === category.category ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab(category.category)}
              >
                <Icon
                  icon={categoryIcons[category.category]}
                  className={styles.tabIcon}
                />
                <span className={styles.tabLabel}>{category.category}</span>
                {activeTab === category.category && (
                  <motion.div
                    className={styles.tabIndicator}
                    layoutId="tabIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Benefits Grid - Desktop (tabbed) */}
          <div className={styles.desktopGrid}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className={styles.benefitsGrid}
              >
                {/* Decorative accent icon */}
                <div className={styles.lottieAccent}>
                  <Icon
                    icon={categoryAccentIcons[activeTab]}
                    className={styles.lottiePlayer}
                    style={{ width: "100%", height: "100%", color: "#FFB800" }}
                  />
                </div>

                {activeCategory.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className={styles.benefitCard}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className={styles.benefitIconWrapper}>
                      <Icon icon={item.icon} className={styles.benefitIcon} />
                    </div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>{item.title}</h4>
                      <p className={styles.benefitDescription}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Benefits Grid - Mobile (all categories stacked) */}
          <div className={styles.mobileStack}>
            {featuresData.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className={styles.mobileCategory}
              >
                <div className={styles.mobileCategoryHeader}>
                  <div className={styles.mobileCategoryLottie}>
                    <Icon
                      icon={categoryAccentIcons[category.category]}
                      style={{
                        width: "100%",
                        height: "100%",
                        color: "#FFB800",
                      }}
                    />
                  </div>
                  <h3 className={styles.mobileCategoryTitle}>
                    {category.category}
                  </h3>
                </div>
                <div className={styles.mobileBenefitsGrid}>
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className={styles.benefitCard}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className={styles.benefitIconWrapper}>
                        <Icon icon={item.icon} className={styles.benefitIcon} />
                      </div>
                      <div className={styles.benefitContent}>
                        <h4 className={styles.benefitTitle}>{item.title}</h4>
                        <p className={styles.benefitDescription}>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solar Highlights Strip */}
          <motion.div
            variants={itemVariants}
            className={styles.highlightsStrip}
          >
            <div className={styles.highlightsTrack}>
              {solarHighlights.map((item, index) => (
                <div key={index} className={styles.highlightChip}>
                  <Icon icon={item.icon} className={styles.highlightIcon} />
                  <span className={styles.highlightLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Network Milestone Highlight */}
          <motion.div variants={itemVariants} className={styles.milestoneWrapper}>
            <div className={styles.milestoneBadge}>
              <Icon icon="mdi:map-marker-radius" className={styles.milestoneIcon} />
              <span className={styles.milestoneText}>
                <strong>300+</strong> cities served by Anvil's PAN-India network
              </span>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className={styles.ctaWrapper}>
            <Typography
              sx={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 600,
                fontSize: { xs: "1.1rem", md: "1.35rem" },
                color: "#0A1F3D",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              Ready to cut your power bill?
            </Typography>
            <Button
              variant="contained"
              className={styles.ctaButton}
              onClick={handleOpenLeadForm}
              endIcon={<Icon icon="mdi:arrow-right" />}
              sx={{
                background: "linear-gradient(135deg, #FFB800 0%, #FFC939 100%)",
                color: "#fff",
                fontWeight: 700,
                fontSize: { xs: "0.9rem", md: "1rem" },
                padding: { xs: "12px 28px", md: "14px 36px" },
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 8px 32px rgba(255, 184, 0, 0.3)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #FFC939 0%, #FFB800 100%)",
                  boxShadow: "0 12px 40px rgba(255, 184, 0, 0.4)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Book Your Free Call
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
