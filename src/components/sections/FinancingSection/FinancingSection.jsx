/* ============================================
   FinancingSection
   Three EMI tiers, a "most popular" ribbon, and
   a bank-partner bar. Sits directly below the
   SubsidiesSection to answer the "can I afford
   it up front?" objection.
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import Section from '../../common/Section';
import SectionHeading from '../../common/SectionHeading';
import { useModal } from '../../../context/ModalContext';
import { financingTiers, financingPartners } from '../../../data/financingData';
import styles from './FinancingSection.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const FinancingSection = () => {
  const { openLeadDrawer } = useModal();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const handleApply = (tier) => {
    openLeadDrawer({
      source: 'financing',
      solution: `${tier.duration} EMI`,
    });
  };

  return (
    <Section id="financing" variant="muted" size="lg">
      <SectionHeading
        eyebrow="Financing made simple"
        title="Pay monthly. Start saving immediately."
        subtitle="Zero-down-payment EMIs from our partner banks. Most Anvil customers' EMI is less than their old electricity bill."
      />

      <motion.div
        ref={ref}
        className={styles.tierGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {financingTiers.map((tier) => (
          <motion.article
            key={tier.duration}
            className={`${styles.tier} ${tier.featured ? styles.featured : ''}`}
            variants={cardVariants}
          >
            {tier.featured && <span className={styles.ribbon}>Most Popular</span>}

            <Icon
              icon={tier.icon}
              className={styles.tierIcon}
              style={{ color: tier.accent }}
              aria-hidden="true"
            />
            <span className={styles.tierLabel}>{tier.label}</span>
            <span className={styles.tierDuration}>{tier.duration}</span>
            <span className={styles.tierRate}>Interest rate: {tier.interestRate}</span>
            <span className={styles.tierEmi}>{tier.emiFor3kw}</span>
            <p className={styles.tierBestFor}>
              <strong>Best for:</strong> {tier.bestFor}
            </p>

            <button
              type="button"
              className={styles.tierCta}
              onClick={() => handleApply(tier)}
            >
              Apply with this plan
              <Icon icon="mdi:arrow-right" aria-hidden="true" />
            </button>
          </motion.article>
        ))}
      </motion.div>

      <div className={styles.partnerBar}>
        <p className={styles.partnerCaption}>
          Bank partners — choose the one you already bank with.
        </p>
        <div className={styles.partnerRow}>
          {financingPartners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className={styles.partnerLogo}
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <p className={styles.finePrint}>
        EMI examples use a ₹1,20,000 post-subsidy loan for a 3 kW system at
        quoted rates. Actual EMI may vary based on your credit profile. No
        processing fee with Anvil referrals.
      </p>
    </Section>
  );
};

export default FinancingSection;
