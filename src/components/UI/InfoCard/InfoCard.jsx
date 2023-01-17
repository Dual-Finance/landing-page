import React from 'react';
import c from 'classnames';
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';
import styles from './InfoCard.module.scss';

export function InfoCard(props) {
  const { title, description, image, type = 'dark' } = props;
  return (
    <div
      className={c(styles.infoCard, {
        [styles.dark]: type === 'dark',
        [styles.light]: type === 'light',
      })}
    >
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>
        {description && <div className={styles.description}>{description}</div>}
        {image && (
          <div className={styles.image}>
            <ResponsiveImage path={image} width="100%" height="auto" />
          </div>
        )}
      </div>
    </div>
  );
}
