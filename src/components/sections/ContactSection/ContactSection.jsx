/* ============================================
   ContactSection Component
   "Talk to Anvil" contact section with contact cards
   and embedded lead form
   ============================================ */

import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import UnifiedLeadForm from "../../common/UnifiedLeadForm/UnifiedLeadForm";
import { useModal } from "../../../context/ModalContext";
import styles from "./ContactSection.module.css";

const SALES_EMAIL = process.env.REACT_APP_SALES_EMAIL || "hello@anvil.energy";

const ContactSection = () => {
  const { openLeadDrawer } = useModal();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Contact methods (Anvil)
  const contactMethods = [
    {
      icon: "mdi:phone-in-talk",
      title: "Call our toll-free",
      value: "1800 2020 001",
      href: "tel:+918002020001",
      cta: "Call now",
    },
    {
      icon: "mdi:whatsapp",
      title: "WhatsApp",
      value: "Chat with Anvil Saathi",
      href: `https://wa.me/918002020001?text=${encodeURIComponent(
        "Hi Anvil — I'd like a solar savings plan"
      )}`,
      cta: "Open WhatsApp",
      external: true,
    },
    {
      icon: "mdi:email",
      title: "Email",
      value: SALES_EMAIL,
      href: `mailto:${SALES_EMAIL}`,
      cta: "Send email",
    },
    {
      icon: "mdi:map-marker",
      title: "HQ",
      value: "Gurugram, Haryana",
      href: "https://maps.google.com/?q=Gurugram,Haryana,India",
      cta: "View on map",
      external: true,
    },
  ];

  const handleRequestCallback = () => {
    openLeadDrawer("contact", {
      title: "Request a Callback",
      subtitle:
        "Share your details and an Anvil Saathi will reach out shortly.",
    });
  };

  return (
    <section id="contact" className={styles.section}>
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <Typography variant="overline" className={styles.sectionOverline}>
              Talk to Anvil
            </Typography>
            <Typography variant="h2" className={styles.sectionTitle}>
              Questions?{" "}
              <span className={styles.highlight}>
                Your Saathi is 30 minutes away.
              </span>
            </Typography>
            <Typography variant="body1" className={styles.sectionSubtitle}>
              Call, WhatsApp, or drop us a line. No pushy sales — just a solar
              savings plan that actually makes sense.
            </Typography>
          </motion.div>

          {/* Quick Action Buttons (mobile-first, visible on all) */}
          <motion.div variants={itemVariants} className={styles.quickActions}>
            <a href="tel:+918002020001" className={styles.quickActionBtn}>
              <Icon icon="mdi:phone" className={styles.quickActionIcon} />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/918002020001?text=${encodeURIComponent(
                "Hi Anvil — I'd like a solar savings plan"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.quickActionBtn} ${styles.quickActionWhatsapp}`}
            >
              <Icon icon="mdi:whatsapp" className={styles.quickActionIcon} />
              <span>WhatsApp Us</span>
            </a>
            <button
              onClick={handleRequestCallback}
              className={`${styles.quickActionBtn} ${styles.quickActionCallback}`}
            >
              <Icon
                icon="mdi:phone-callback"
                className={styles.quickActionIcon}
              />
              <span>Request Callback</span>
            </button>
          </motion.div>

          <Grid container spacing={6} alignItems="flex-start">
            {/* Left Side - Contact Cards */}
            <Grid item xs={12} lg={6}>
              <motion.div
                variants={itemVariants}
                className={styles.contentWrapper}
              >
                <div className={styles.contactGrid}>
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={styles.contactCard}
                    >
                      <div className={styles.contactIcon}>
                        <Icon icon={method.icon} />
                      </div>
                      <div className={styles.contactText}>
                        <Typography
                          variant="subtitle2"
                          className={styles.contactTitle}
                        >
                          {method.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className={styles.contactContent}
                        >
                          {method.value}
                        </Typography>
                        <a
                          href={method.href}
                          className={styles.contactCta}
                          aria-label={`${method.cta} — ${method.title}`}
                          {...(method.external
                            ? {
                                target: "_blank",
                                rel: "noopener noreferrer",
                              }
                            : {})}
                        >
                          <span>{method.cta}</span>
                          <Icon
                            icon="mdi:arrow-right"
                            className={styles.contactCtaIcon}
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Hours strip */}
                <motion.div variants={itemVariants} className={styles.hours}>
                  <strong>Open hours:</strong> Mon–Sat, 9:00 AM – 7:00 PM IST ·
                  Sunday closed
                </motion.div>
              </motion.div>
            </Grid>

            {/* Right Side - Form */}
            <Grid item xs={12} lg={6}>
              <motion.div
                variants={formVariants}
                className={styles.formWrapper}
              >
                {/* Form Header */}
                <div className={styles.formHeader}>
                  <Typography variant="h5" component="h3" className={styles.formTitle}>
                    Prefer to fill a form? We'll call you back.
                  </Typography>
                </div>

                {/* Unified Lead Form */}
                <UnifiedLeadForm
                  variant="default"
                  source="contact"
                  showTitle={false}
                  showSubtitle={false}
                  showTrustBadges={true}
                  showConsent={true}
                  showPhoneButton={false}
                  submitButtonText="Submit Enquiry"
                  formId="contact-form"
                  className={styles.formContent}
                />
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactSection;
