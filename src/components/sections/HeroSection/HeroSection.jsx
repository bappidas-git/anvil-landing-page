/* ============================================
   HeroSection Component
   Hero section with animations
   ============================================ */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Grid,
  Chip,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import { useModal } from "../../../context/ModalContext";
import { trackCTAClick } from "../../../utils/gtm";
import styles from "./HeroSection.module.css";

// Set REACT_APP_HERO_VIDEO_URL in .env to enable hero background video
// Hero images with fallbacks
const HERO_IMAGES = {
  desktop: [
    "https://placehold.co/1600x900?text=Assam+Home+With+Rooftop+Solar+Panels+Sunrise",
  ],
  mobile: [
    "https://placehold.co/800x1000?text=Rooftop+Solar+Installation+Northeast+India",
  ],
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Trust indicators data
const trustIndicators = [
  { icon: "mdi:sun-wireless", text: "Free design + savings plan" },
  { icon: "mdi:bank", text: "PM Surya Ghar subsidy ₹78,000" },
  { icon: "mdi:shield-sun", text: "25-yr panel warranty" },
  { icon: "mdi:whatsapp", text: "WhatsApp support 7 days" },
];

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const { openLeadDrawer } = useModal();

  // Fallback image state
  const [heroImageUrl, setHeroImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Try loading fallback images in order
  useEffect(() => {
    const images = isMobile ? HERO_IMAGES.mobile : HERO_IMAGES.desktop;
    let cancelled = false;

    const tryLoadImage = async () => {
      for (const url of images) {
        if (cancelled) return;
        try {
          const loaded = await new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
            setTimeout(() => resolve(false), 5000);
          });
          if (loaded && !cancelled) {
            setHeroImageUrl(url);
            setImageLoaded(true);
            return;
          }
        } catch {
          continue;
        }
      }
      console.warn("All hero images failed to load, using gradient fallback");
    };

    tryLoadImage();
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

  return (
    <section className={styles.heroSection} id="home">
      {/* === Background Layer 1: Gradient fallback (always present) === */}
      <div className={styles.heroBgGradient} />

      {/* === Background Layer 2: Fallback image === */}
      {imageLoaded && (
        <div
          className={styles.heroBgImage}
          style={{ backgroundImage: `url('${heroImageUrl}')` }}
          role="img"
          aria-label="Modern home with rooftop solar panels installed by Anvil"
        />
      )}

      {/* === Dark overlay for text readability === */}
      <div className={styles.heroOverlay} />

      {/* Animated Background Pattern */}
      <div className={styles.patternOverlay} />

      {/* Main Content */}
      <Container maxWidth="xl" className={styles.heroContainer}>
        <Grid container spacing={isMobile ? 3 : 6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} lg={7}>
            <motion.div
              className={styles.heroContent}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Pre-headline Badge */}
              <motion.div variants={badgeVariants}>
                <Chip
                  icon={<span className={styles.pulseDot} />}
                  label="Serving Assam • Nagaland • Bhubaneswar"
                  className={styles.launchBadge}
                  sx={{
                    backgroundColor: "#FFB800",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    height: "36px",
                    borderRadius: "20px",
                    "& .MuiChip-icon": {
                      marginLeft: "8px",
                    },
                  }}
                />
              </motion.div>

              {/* Main Headline */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h1"
                  className={styles.heroTitle}
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: {
                      xs: "2.25rem",
                      sm: "2.75rem",
                      md: "3.25rem",
                      lg: "3.5rem",
                    },
                    lineHeight: 1.1,
                    marginTop: "1.5rem",
                  }}
                >
                  Cut your power bill by up to{" "}
                  <span className={styles.accent}>90%</span>
                  <br />with rooftop solar built for your home.
                </Typography>
              </motion.div>

              {/* Sub-headline */}
              <motion.div variants={itemVariants}>
                <Typography
                  variant="h6"
                  className={styles.heroSubtitle}
                  sx={{
                    color: "rgba(255, 255, 255, 0.85)",
                    fontWeight: 400,
                    fontSize: { xs: "0.95rem", md: "1.125rem" },
                    marginTop: "1rem",
                    maxWidth: "600px",
                    lineHeight: 1.6,
                  }}
                >
                  Free site survey. PM Surya Ghar subsidy up to ₹78,000.
                  Zero-down-payment EMIs from 7%. Trusted by homeowners across
                  Assam, Nagaland & Bhubaneswar.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={buttonVariants}
                className={styles.ctaButtons}
              >
                <Button
                  variant="contained"
                  size="large"
                  className={styles.primaryCta}
                  onClick={() => {
                    trackCTAClick(
                      "hero_primary_cta",
                      "hero",
                      "Get My Free Savings Plan",
                    );
                    openLeadDrawer("hero-primary");
                  }}
                  sx={{
                    backgroundColor: "#FF6B35",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    fontSize: "1rem",
                    padding: "0.875rem 2rem",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    boxShadow: "0 4px 20px rgba(255, 107, 53, 0.4)",
                    "&:hover": {
                      backgroundColor: "#E85A20",
                      boxShadow: "0 6px 24px rgba(255, 107, 53, 0.55)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get My Free Savings Plan →
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  className={styles.secondaryCta}
                  component="a"
                  href="#calculator"
                  onClick={() => {
                    trackCTAClick(
                      "hero_secondary_cta",
                      "hero",
                      "See My Savings",
                    );
                  }}
                  sx={{
                    borderColor: "rgba(255, 255, 255, 0.6)",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    fontSize: "1rem",
                    padding: "0.875rem 2rem",
                    borderRadius: "12px",
                    textTransform: "none",
                    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                    borderWidth: "2px",
                    "&:hover": {
                      borderColor: "#FFFFFF",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      borderWidth: "2px",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  See My Savings
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className={styles.trustIndicators}
              >
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className={styles.trustIndicator}>
                    <Icon icon={indicator.icon} className={styles.trustIcon} />
                    <span>{indicator.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right Content - Lead Form Slot (Desktop only) */}
          {isDesktop && (
            <Grid item lg={5}>
              <motion.div
                className={styles.formWrapper}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <div id="hero-form-slot" className={styles.formCard}>
                  {/* MultiStepLeadForm will be mounted here in prompt 09 */}
                  <div style={{ padding: "32px", color: "#FFFFFF", textAlign: "center", minHeight: "420px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div>
                      <strong style={{ fontSize: "1.1rem" }}>Get your free savings plan</strong>
                      <div style={{ opacity: 0.75, marginTop: "8px", fontSize: "0.9rem" }}>
                        Multi-step form mounts here (prompt 09)
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          )}
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon icon="mdi:chevron-double-down" className={styles.scrollIcon} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
