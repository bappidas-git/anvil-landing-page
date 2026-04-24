/* ============================================
   CalculatorSection
   Interactive solar savings calculator: inputs on
   the left, live output on the right. Output is a
   placeholder here and will be replaced later.
   ============================================ */

import React from 'react';
import Section from '../../common/Section';
import SectionHeading from '../../common/SectionHeading';
import CalculatorInputs from './CalculatorInputs';
import useSolarCalculator from '../../../hooks/useSolarCalculator';
import styles from './CalculatorSection.module.css';

const CalculatorOutputPlaceholder = ({ inputs }) => (
  <div className={styles.outputPlaceholder}>
    <div className={styles.placeholderInner}>
      <div className={styles.placeholderTitle}>Live savings preview</div>
      <ul className={styles.placeholderList}>
        <li>
          <span>Monthly bill</span>
          <strong>₹{inputs.monthlyBill.toLocaleString('en-IN')}</strong>
        </li>
        <li>
          <span>Roof area</span>
          <strong>{inputs.roofArea.toLocaleString('en-IN')} sq ft</strong>
        </li>
        <li>
          <span>State</span>
          <strong>{inputs.state}</strong>
        </li>
        <li>
          <span>Peak sun hours</span>
          <strong>~{inputs.sunHours} hrs/day</strong>
        </li>
      </ul>
    </div>
  </div>
);

const CalculatorSection = () => {
  const { inputs, setters } = useSolarCalculator();

  return (
    <Section id="calculator" variant="default" size="lg">
      <SectionHeading
        eyebrow="Solar Savings Calculator"
        title="See how much you'll save — in under 10 seconds."
        subtitle="Move the sliders. We'll show your savings, system size, and payback period live."
      />

      <div className={styles.grid}>
        <div className={styles.inputsCol}>
          <CalculatorInputs inputs={inputs} setters={setters} />
        </div>
        <div className={styles.outputCol}>
          <CalculatorOutputPlaceholder inputs={inputs} />
        </div>
      </div>
    </Section>
  );
};

export default CalculatorSection;
