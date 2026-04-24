import React from 'react';
import styles from './GalleryCard.module.css';

const GalleryCard = ({ location, systemKw, type, image }) => {
  return (
    <figure className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={`${systemKw} ${type} solar installation in ${location}`}
          loading="lazy"
        />
        <span className={styles.kwBadge}>{systemKw}</span>
      </div>
      <figcaption className={styles.meta}>
        <span className={styles.location}>{location}</span>
        <span className={styles.type}>{type}</span>
      </figcaption>
    </figure>
  );
};

export default GalleryCard;
