/* ============================================
   CTASection Component
   Customer Testimonials & Social Proof
   with CTA for booking consultations
   ============================================ */

import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Button from "../../common/Button/Button";
import { useModal } from "../../../context/ModalContext";
import styles from "./CTASection.module.css";

const testimonials = [
  {
    name: "Rohit Verma",
    location: "Gurugram, Haryana",
    rating: 5,
    feedback:
      "Our electricity bill dropped from ₹6,200 to ₹580 after Anvil's 5 kW system went live. The Saathi handled every single paper — I didn't chase DISCOM once.",
    systemSize: "5 kW On-Grid",
  },
  {
    name: "Sneha Iyer",
    location: "Pune, Maharashtra",
    rating: 5,
    feedback:
      "We chose hybrid because power cuts here are brutal. Now the lights never go off. The app shows us how much we're saving every day — it's addictive.",
    systemSize: "6 kW Hybrid + 8 kWh battery",
  },
  {
    name: "Anwar Khan",
    location: "Hyderabad, Telangana",
    rating: 5,
    feedback:
      "I compared four installers. Only Anvil's Saathi could explain net metering clearly. End-to-end in 4 weeks, subsidy credited to my bank in the 5th. No drama.",
    systemSize: "4 kW On-Grid",
  },
  {
    name: "Meera Pillai",
    location: "Kochi, Kerala",
    rating: 5,
    feedback:
      "We run a small printing unit. Anvil's 25 kW commercial install pays for itself in under 4 years, and the AMC is included. Zero regrets.",
    systemSize: "25 kW Commercial",
  },
  {
    name: "Harpreet Singh",
    location: "Ludhiana, Punjab",
    rating: 5,
    feedback:
      "The EMI option was a game-changer — 84 months, zero down payment. My monthly EMI is less than half of what my old electricity bill used to be.",
    systemSize: "3 kW On-Grid",
  },
  {
    name: "Deepika Rao",
    location: "Bengaluru, Karnataka",
    rating: 5,
    feedback:
      "Professional installers, neat cabling, clean commissioning. Even the neighbours have asked for Anvil's number. Highly recommend.",
    systemSize: "7 kW Hybrid",
  },
];

const trustBadges = [
  { value: "10,000+", label: "Happy homes powered", icon: "mdi:home-lightning-bolt" },
  { value: "4.9/5", label: "Average customer rating", icon: "mdi:star-circle" },
  { value: "300+", label: "Cities served PAN-India", icon: "mdi:map-marker-radius" },
  { value: "25 yrs", label: "Panel warranty", icon: "mdi:shield-check" },
];

const CARDS_PER_VIEW = 3;

const CTASection = () => {
  const { openLeadDrawer } = useModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_VIEW);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * CARDS_PER_VIEW,
    currentIndex * CARDS_PER_VIEW + CARDS_PER_VIEW
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleBookConsultation = () => {
    openLeadDrawer("book-consultation");
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        icon={i < rating ? "mdi:star" : "mdi:star-outline"}
        className={i < rating ? styles.starFilled : styles.starEmpty}
      />
    ));
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <section id="testimonials" className={styles.section}>
      {/* Background */}
      <div className={styles.bgOverlay} />
      <div className={styles.bgPattern} />

      <Container maxWidth="xl">
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <Typography variant="overline" className={styles.overline}>
              Real customers, real savings
            </Typography>
            <Typography variant="h3" className={styles.title}>
              Anvil families are{" "}
              <span className={styles.highlight}>
                saving ₹5,000+ every month.
              </span>
            </Typography>
            <Typography variant="body1" className={styles.subtitle}>
              See what homeowners and businesses across India are saying about
              their Anvil Saathi.
            </Typography>
          </motion.div>

          {/* Testimonial Cards */}
          <motion.div variants={itemVariants} className={styles.testimonialGrid}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className={styles.cardsWrapper}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                  exit: {},
                }}
              >
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.name}
                    className={styles.testimonialCard}
                    variants={cardVariants}
                  >
                    <div className={styles.quoteIcon}>
                      <Icon icon="mdi:format-quote-open" />
                    </div>

                    <div className={styles.cardHeader}>
                      <div className={styles.avatar}>
                        {getInitials(testimonial.name)}
                      </div>
                      <div className={styles.cardHeaderInfo}>
                        <span className={styles.patientName}>
                          {testimonial.name}
                        </span>
                        <span className={styles.patientLocation}>
                          <Icon icon="mdi:map-marker-outline" />
                          {testimonial.location}
                        </span>
                      </div>
                    </div>

                    <div className={styles.stars}>
                      {renderStars(testimonial.rating)}
                    </div>

                    <p className={styles.testimonialText}>
                      &ldquo;{testimonial.feedback}&rdquo;
                    </p>

                    <div className={styles.procedureBadge}>
                      <Icon icon="mdi:solar-power-variant" />
                      {testimonial.systemSize}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Carousel Navigation */}
            {totalPages > 1 && (
              <div className={styles.carouselNav}>
                <button
                  className={styles.navBtn}
                  onClick={handlePrev}
                  aria-label="Previous testimonials"
                >
                  <Icon icon="mdi:chevron-left" />
                </button>
                <div className={styles.dots}>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${
                        i === currentIndex ? styles.dotActive : ""
                      }`}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to page ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  className={styles.navBtn}
                  onClick={handleNext}
                  aria-label="Next testimonials"
                >
                  <Icon icon="mdi:chevron-right" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className={styles.trustBadges}>
            {trustBadges.map((badge, index) => (
              <React.Fragment key={badge.label}>
                {index > 0 && <div className={styles.badgeDivider} />}
                <div className={styles.badgeItem}>
                  <Icon icon={badge.icon} className={styles.badgeIcon} />
                  <span className={styles.badgeValue}>{badge.value}</span>
                  <span className={styles.badgeLabel}>{badge.label}</span>
                </div>
              </React.Fragment>
            ))}
          </motion.div>

          {/* CTA Area */}
          <motion.div variants={itemVariants} className={styles.ctaArea}>
            <Typography variant="h4" className={styles.ctaTitle}>
              Join 10,000+ homes already saving with Anvil
            </Typography>
            <Typography variant="body1" className={styles.ctaSubtext}>
              Zero-obligation. Your Saathi calls within 30 minutes.
            </Typography>

            <div className={styles.ctaButtons}>
              <motion.div
                variants={pulseVariants}
                initial="initial"
                animate="animate"
              >
                <Button
                  variant="primary"
                  size="large"
                  endIcon="mdi:arrow-right"
                  onClick={handleBookConsultation}
                  className={styles.primaryBtn}
                >
                  Book Your Free Call
                </Button>
              </motion.div>

              <Button
                variant="outline"
                size="large"
                startIcon="mdi:phone-outline"
                href="tel:+918002020001"
                className={styles.secondaryBtn}
              >
                Call 1800 2020 001
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Corner Decorations */}
      <div className={styles.cornerDecoration1} />
      <div className={styles.cornerDecoration2} />
    </section>
  );
};

export default CTASection;
