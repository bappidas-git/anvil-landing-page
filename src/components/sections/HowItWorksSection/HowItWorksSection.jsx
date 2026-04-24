import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Icon } from '@iconify/react';
import Section from '../../common/Section';
import SectionHeading from '../../common/SectionHeading';
import { howItWorksData } from '../../../data/howItWorksData';
import styles from './HowItWorksSection.module.css';

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

const HowItWorksSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <Section id="how-it-works" variant="muted" size="lg">
      <SectionHeading
        eyebrow="Simple, no-stress process"
        title="From your first click to free power, in 4 steps."
        subtitle="We handle the design, subsidy paperwork, DISCOM coordination, and install. You only show up for the tea."
      />

      <motion.div
        ref={ref}
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {howItWorksData.map((step) => (
          <motion.article
            key={step.number}
            className={styles.card}
            variants={cardVariants}
          >
            <span className={styles.number}>{step.number}</span>
            <Icon icon={step.icon} className={styles.icon} aria-hidden="true" />
            <h4 className={styles.title}>{step.title}</h4>
            <span className={styles.duration}>
              <Icon icon="mdi:clock-outline" aria-hidden="true" />
              {step.duration}
            </span>
            <p className={styles.description}>{step.description}</p>
            <img
              src={step.image}
              alt={step.title}
              className={styles.image}
              loading="lazy"
            />
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
};

export default HowItWorksSection;
