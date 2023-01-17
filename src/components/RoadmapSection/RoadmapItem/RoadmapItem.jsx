import React from 'react';
import c from 'classnames';
import styles from './RoadmapItem.module.scss';
import { Badge } from '../../UI/Badge/Badge';

export function RoadmapItem({ index, title, description, isArrow }) {
  const isLeftArrow = index % 2 === 0;
  return (
    <div className={c(styles.roadmapItem, { [styles.itemLeft]: isLeftArrow, [styles.itemRight]: !isLeftArrow })}>
      <div className={styles.roadmapItemBg}>
        <div className={styles.index}>
          <Badge text={`0${index}`} size="small" fontSize="big" />
        </div>
        {/* <div className={styles.index}>{`0${index}`}</div> */}
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.description}>{description}</div>
        {isArrow && (
          <div
            className={c(styles.arrow, { [styles.arrowRight]: !isLeftArrow, [styles.arrowLeft]: isLeftArrow })}
            alt="arrow"
          />
        )}
      </div>
    </div>
  );
}
