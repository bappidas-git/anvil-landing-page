/* ============================================
   SolutionsSection
   Four home-buyer archetypes, each with its own
   CTA that pre-tags the lead drawer.
   ============================================ */

import React from 'react';
import Section from '../../common/Section';
import SectionHeading from '../../common/SectionHeading';
import Reveal from '../../common/Reveal/Reveal';
import SolutionCard from './SolutionCard';
import solutionsData from '../../../data/solutionsData';
import { useModal } from '../../../context/ModalContext';
import styles from './SolutionsSection.module.css';

const SolutionsSection = () => {
  const { openLeadDrawer } = useModal();

  const handleCtaClick = (solution) => {
    openLeadDrawer({
      source: 'solutions',
      solution: solution.solutionTag,
    });
  };

  return (
    <Section id="solutions" variant="default" size="lg">
      <SectionHeading
        eyebrow="Solutions for every home"
        title="Find the solar setup that fits your home."
        subtitle="From a single-family rooftop in Guwahati to a housing society in Bhubaneswar — we design, install, and support the right system for you."
      />

      <div className={styles.grid}>
        {solutionsData.map((solution, index) => (
          <Reveal key={solution.id} delay={index * 80}>
            <SolutionCard
              solution={solution}
              onCtaClick={handleCtaClick}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default SolutionsSection;
