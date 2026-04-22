/* ============================================
   LocationSection Component
   PAN-India service footprint section
   ============================================ */

import React from "react";
import { Container, Grid, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Button from "../../common/Button/Button";
import { locationData } from "../../../data/locationData";
import styles from "./LocationSection.module.css";

const LocationSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 15px 40px rgba(10, 31, 61, 0.15)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const handleViewHQ = () => {
    window.open(
      "https://www.google.com/maps/search/Anvil+Energy+Gurugram+Haryana",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const connectivityHighlights = [
    {
      icon: "mdi:map-marker-radius",
      title: "Headquartered in Gurugram with PAN-India installer network",
      color: "#FF9800",
    },
    {
      icon: "mdi:home-city",
      title: "Active in 300+ cities across every major state",
      color: "#2196F3",
    },
    {
      icon: "mdi:solar-power-variant",
      title: "Local crews trained on state-specific subsidy filings",
      color: "#9C27B0",
    },
    {
      icon: "mdi:headset",
      title: "Toll-free support: 1800 2020 001 (Mon–Sat, 9am–7pm)",
      color: "#4CAF50",
    },
  ];

  return (
    <section id="stores" className={styles.section}>
      <Container maxWidth="xl">
        {/* Section Title */}
        <SectionTitle
          badge="PAN-INDIA"
          title="Solar-ready in 300+ cities."
          highlight="300+ cities."
          subtitle="Anvil's vetted installer teams serve every major metro and tier-2 city across India. Enter your state in the calculator to check local incentives."
          align="center"
          variant="light"
          badgeVariant="gold"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Grid container spacing={4} className={styles.mainContent}>
            {/* HQ Info Card */}
            <Grid item xs={12} md={5}>
              <motion.div
                variants={itemVariants}
                className={styles.centreInfoCard}
              >
                <div className={styles.centreHeader}>
                  <div className={styles.centreIconWrapper}>
                    <Icon icon="mdi:office-building-marker" />
                  </div>
                  <div>
                    <Typography variant="h5" className={styles.centreName}>
                      {locationData.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={styles.centreAddress}
                    >
                      {locationData.address}
                    </Typography>
                  </div>
                </div>

                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <Icon icon="mdi:phone" />
                    </div>
                    <div>
                      <Typography
                        variant="caption"
                        className={styles.contactLabel}
                      >
                        Toll-free
                      </Typography>
                      <Typography
                        variant="body2"
                        className={styles.contactValue}
                      >
                        <a href={`tel:${locationData.phone}`}>{locationData.phoneDisplay}</a>
                      </Typography>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
                      <Icon icon="mdi:email-outline" />
                    </div>
                    <div>
                      <Typography
                        variant="caption"
                        className={styles.contactLabel}
                      >
                        Email
                      </Typography>
                      <Typography
                        variant="body2"
                        className={styles.contactValue}
                      >
                        <a href={`mailto:${locationData.email}`}>
                          {locationData.email}
                        </a>
                      </Typography>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>

            {/* Map Section */}
            <Grid item xs={12} md={7}>
              <motion.div variants={itemVariants} className={styles.mapWrapper}>
                <div className={styles.mapContainer}>
                  <div className={styles.mapPlaceholder}>
                    <img
                      src={locationData.mapUrl}
                      alt="Anvil Energy HQ — Gurugram, Haryana"
                      className={styles.mapImage}
                    />
                    <div className={styles.mapOverlay}>
                      <Icon
                        icon="mdi:map-marker"
                        className={styles.mapPinIcon}
                      />
                      <Typography variant="h6" className={styles.mapTitle}>
                        {locationData.name}
                      </Typography>
                      <Typography variant="body2" className={styles.mapAddress}>
                        {locationData.city}, {locationData.state}
                      </Typography>
                      <Button
                        variant="primary"
                        size="small"
                        startIcon="mdi:map-marker"
                        onClick={handleViewHQ}
                        className={styles.mapButton}
                      >
                        View on Google Maps
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Serving PAN-India - Nearby Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.areasSection}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h5" className={styles.areasTitle}>
              We install across Delhi NCR and beyond
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.areasGrid}>
            {locationData.nearbyAreas.map((area) => (
              <Chip
                key={area}
                label={area}
                icon={<Icon icon="mdi:map-marker-outline" />}
                className={styles.areaPill}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* States We Serve */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.areasSection}
        >
          <motion.div variants={itemVariants}>
            <Typography variant="h5" className={styles.areasTitle}>
              States we serve
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.areasGrid}>
            {locationData.servingStates.map((state) => (
              <Chip
                key={state}
                label={state}
                icon={<Icon icon="mdi:flag-outline" />}
                className={styles.areaPill}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Connectivity Highlights - 2x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.connectivitySection}
        >
          <Grid container spacing={3}>
            {connectivityHighlights.map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className={styles.connectivityCard}
                >
                  <div
                    className={styles.connectivityIcon}
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <Icon icon={item.icon} />
                  </div>
                  <Typography
                    variant="body1"
                    className={styles.connectivityText}
                  >
                    {item.title}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.bottomCta}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              className={styles.ctaTitle}
              sx={{ color: "#fff", marginBottom: "2rem" }}
            >
              Ready to go solar? Talk to an Anvil energy advisor today.
            </Typography>
          </motion.div>
          <motion.div variants={itemVariants} className={styles.ctaButtons}>
            <Button
              variant="primary"
              size="large"
              startIcon="mdi:map-marker"
              onClick={handleViewHQ}
            >
              View HQ on Map
            </Button>
            <Button
              variant="outline"
              size="large"
              startIcon="mdi:phone"
              href={`tel:${locationData.phone}`}
              className={styles.callUsBtn}
            >
              Call {locationData.phoneDisplay}
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Background Decorations */}
      <div className={styles.bgDecoration1} />
      <div className={styles.bgDecoration2} />
    </section>
  );
};

export default LocationSection;
