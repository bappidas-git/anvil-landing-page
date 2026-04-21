/* ============================================
   StatsSection Component
   Trust & achievement metrics with animated counters
   ============================================ */

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Icon } from '@iconify/react';
import AnimatedCounter from '../../common/AnimatedCounter/AnimatedCounter';
import { statsData } from '../../../data/statsData';
import styles from './StatsSection.module.css';

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
      duration: 0.6,
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
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const StatsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={styles.statsSection} id="highlights" ref={ref}>
      {/* Background Pattern */}
      <div className={styles.patternBg} />

      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className={styles.sectionHeader}>
            <Typography className={styles.overline}>
              Proof in numbers
            </Typography>
            <Typography
              variant="h2"
              className={styles.sectionTitle}
              sx={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                color: 'var(--primary-dark)',
                marginBottom: { xs: '0.75rem', md: '1rem' },
              }}
            >
              India is switching to solar —{' '}
              <span className={styles.accent}>with Anvil.</span>
            </Typography>
            <Typography
              className={styles.sectionSubtitle}
              sx={{
                fontSize: { xs: '0.9375rem', md: '1.0625rem' },
                color: '#6B7280',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Real savings, real warranties, real people on the other end of the phone.
            </Typography>
          </motion.div>

          {/* Stats Grid */}
          <Grid container spacing={isMobile ? 2 : 3} className={styles.statsGrid}>
            {statsData.map((stat, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <motion.div
                  className={styles.statCard}
                  custom={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.25 },
                  }}
                >
                  <div className={styles.statIconWrapper}>
                    <Icon
                      icon={stat.icon}
                      className={styles.statIcon}
                    />
                  </div>
                  <div className={styles.statValue}>
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                      duration={1.5}
                      delay={0.2 + index * 0.1}
                      color="dark"
                    />
                  </div>
                  <Typography className={styles.statLabel}>
                    {stat.label}
                  </Typography>
                  <Typography className={styles.statDescription}>
                    {stat.description}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </section>
  );
};

export default StatsSection;
