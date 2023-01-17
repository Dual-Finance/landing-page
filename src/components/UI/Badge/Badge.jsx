import React from 'react';
import c from 'classnames';
import styles from './Badge.module.scss';

export function Badge({ text, size = 'regular', fontSize = 'regular' }) {
  return (
    <div
      className={c(styles.badge, {
        [styles.sizeSmall]: size === 'small',
        [styles.sizeRegular]: size === 'regular',
        [styles.fontSizeSmall]: fontSize === 'regular',
        [styles.fontSizeBig]: fontSize === 'big',
      })}
    >
      {text}
    </div>
  );
}
