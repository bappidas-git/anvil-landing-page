import React from 'react';

import Section from '../../common/Section';
import SectionHeading from '../../common/SectionHeading';
import GalleryCard from './GalleryCard';
import { installGalleryData } from '../../../data/installGalleryData';
import styles from './InstallGallery.module.css';

const InstallGallery = () => {
  return (
    <Section id="gallery" variant="muted" size="lg">
      <SectionHeading
        eyebrow="Installation gallery"
        title="Real rooftops. Real families. Real savings."
        subtitle="Recent installs across Assam, Nagaland & Odisha — the homes already running on sunshine."
      />

      <div className={styles.grid}>
        {installGalleryData.map((item) => (
          <GalleryCard
            key={item.id}
            location={item.location}
            systemKw={item.systemKw}
            type={item.type}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default InstallGallery;
