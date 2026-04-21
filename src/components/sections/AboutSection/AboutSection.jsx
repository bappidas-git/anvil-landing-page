/* ============================================
   AboutSection Component
   "Why Anvil" section with stats, Saathi highlight & differentiators
   ============================================ */

import React from "react";
import { motion, useInView } from "framer-motion";
import { Container, Typography, Button } from "@mui/material";
import { Icon } from "@iconify/react";
import AnimatedCounter from "../../common/AnimatedCounter/AnimatedCounter";
import { useModal } from "../../../context/ModalContext";
import styles from "./AboutSection.module.css";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

// Stats data — solar-relevant trust markers
const keyStats = [
  {
    value: "10000",
    prefix: "",
    suffix: "+",
    label: "Rooftops powered",
    icon: "mdi:home-lightning-bolt",
    color: "#FFB800",
  },
  {
    value: "70",
    prefix: "",
    suffix: "–90%",
    label: "Average bill cut",
    icon: "mdi:flash",
    color: "#0A1F3D",
  },
  {
    value: "78000",
    prefix: "₹",
    suffix: "",
    label: "Subsidy assistance",
    icon: "mdi:cash-multiple",
    color: "#FFB800",
  },
  {
    value: "25",
    prefix: "",
    suffix: " yrs",
    label: "Panel warranty",
    icon: "mdi:shield-check",
    color: "#0A1F3D",
  },
];

// Anvil Saathi profile data
const doctorProfile = {
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80&auto=format&fit=crop",
  name: "Anvil Saathi",
  credentials: "",
  title: "Your dedicated solar companion",
  bio: "Every Anvil customer is assigned a personal Saathi who handles the site survey, system design, DISCOM paperwork, subsidy filing, installation oversight, and lifetime support. One number. One person. Zero runaround.",
};

// Supporting image
const clinicImage = {
  src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80&auto=format&fit=crop",
  alt: "Anvil solar installation on a residential rooftop",
};

// Key differentiators — why choose Anvil
const differentiators = [
  {
    icon: "mdi:handshake",
    title: "One Saathi, start to finish",
  },
  {
    icon: "mdi:file-document-check",
    title: "PM Surya Ghar paperwork handled",
  },
  {
    icon: "mdi:cash-multiple",
    title: "Zero-down-payment EMI options",
  },
  {
    icon: "mdi:solar-panel-large",
    title: "Tier-1 panels + Tier-1 inverters",
  },
  {
    icon: "mdi:shield-check",
    title: "25-year panel + 10-year inverter warranty",
  },
  {
    icon: "mdi:wrench",
    title: "Free AMC for the first year",
  },
];

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { openLeadDrawer } = useModal();

  return (
    <section className={styles.overviewSection} id="about" ref={ref}>
      {/* Background Elements */}
      <div className={styles.bgGradient} />
      <div className={styles.bgPattern} />

      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={styles.mainWrapper}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <span className={styles.badge}>WHY ANVIL</span>
            <Typography
              variant="h2"
              className={styles.sectionTitle}
              sx={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.75rem", sm: "2rem", md: "2.75rem" },
                color: "var(--primary-dark)",
                letterSpacing: "-0.01em",
              }}
            >
              Your{" "}
              <span className={styles.accent}>Anvil Saathi</span>
              {" "}— from first call to first kilowatt.
            </Typography>
            <Typography
              variant="h3"
              className={styles.sectionSubtitle}
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.2rem" },
                color: "#6b7280",
                marginTop: "0.5rem",
              }}
            >
              Anvil handles every step of your rooftop solar journey so you
              never have to juggle vendors, paperwork, or subsidy approvals.
            </Typography>
          </motion.div>

          {/* Stats Counter Row */}
          <motion.div variants={itemVariants} className={styles.statsRow}>
            {keyStats.map((stat, index) => (
              <motion.div
                key={index}
                className={styles.statItem}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className={styles.statIcon}
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <Icon icon={stat.icon} style={{ color: stat.color }} />
                </div>
                <div className={styles.statValue}>
                  {stat.prefix && (
                    <span className={styles.statPrefix}>{stat.prefix}</span>
                  )}
                  <AnimatedCounter
                    value={stat.value}
                    duration={1.5}
                    delay={0.2 + index * 0.1}
                  />
                  {stat.suffix && (
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  )}
                </div>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Grid (2 columns desktop, 1 column mobile) */}
          <div className={styles.contentGrid}>
            {/* Left Column - Text */}
            <motion.div variants={itemVariants} className={styles.textColumn}>
              <Typography className={styles.contentParagraph}>
                Rooftop solar in India is a maze of DISCOMs, vendors, subsidies,
                and financing options. Anvil cuts through all of it. Your
                Saathi designs the right system for your home or business,
                books the panels, gets the sanctions, and hands you a running
                solar plant — usually in 3 to 6 weeks.
              </Typography>
              <Button
                variant="contained"
                onClick={() => openLeadDrawer("apply-now")}
                className={styles.ctaButton}
                endIcon={<Icon icon="mdi:arrow-right" />}
                sx={{
                  background:
                    "linear-gradient(135deg, #FFB800 0%, #FFC939 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: { xs: "0.9375rem", md: "1rem" },
                  padding: { xs: "12px 28px", md: "14px 36px" },
                  borderRadius: "50px",
                  textTransform: "none",
                  boxShadow: "0 8px 30px rgba(255, 184, 0, 0.3)",
                  marginTop: "1.5rem",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #FFC939 0%, #FFB800 100%)",
                    boxShadow: "0 12px 40px rgba(255, 184, 0, 0.45)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Talk to your Saathi
              </Button>
            </motion.div>

            {/* Right Column - Saathi Profile & Supporting Image */}
            <motion.div variants={itemVariants} className={styles.imageColumn}>
              <motion.div
                className={styles.doctorCard}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.doctorImageWrapper}>
                  <img
                    src={doctorProfile.image}
                    alt="Anvil certified solar installer working on a residential rooftop"
                    className={styles.doctorImage}
                    loading="lazy"
                  />
                </div>
                <div className={styles.doctorInfo}>
                  <h3 className={styles.doctorName}>{doctorProfile.name}</h3>
                  {doctorProfile.credentials && (
                    <span className={styles.doctorCredentials}>
                      {doctorProfile.credentials}
                    </span>
                  )}
                  <span className={styles.doctorTitle}>
                    {doctorProfile.title}
                  </span>
                  <p className={styles.doctorBio}>{doctorProfile.bio}</p>
                </div>
              </motion.div>
              <motion.div
                className={styles.imageWrapper}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={clinicImage.src}
                  alt={clinicImage.alt}
                  className={styles.gridImage}
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Key Differentiators Row */}
          <motion.div
            variants={itemVariants}
            className={styles.differentiatorsRow}
          >
            <Typography
              variant="h4"
              className={styles.differentiatorsTitle}
              sx={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                color: "var(--primary-dark)",
                textAlign: "center",
                marginBottom: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Why Choose Anvil
            </Typography>
            <div className={styles.differentiatorsGrid}>
              {differentiators.map((item, index) => (
                <motion.div
                  key={index}
                  className={styles.differentiatorCard}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={styles.differentiatorIcon}>
                    <Icon icon={item.icon} />
                  </div>
                  <h4 className={styles.differentiatorTitle}>{item.title}</h4>
                  {item.description && (
                    <p className={styles.differentiatorDesc}>
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutSection;
