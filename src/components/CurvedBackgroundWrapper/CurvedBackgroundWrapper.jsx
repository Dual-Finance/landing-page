import React from 'react';
import c from 'classnames';
import styles from './CurvedBackgroundWrapper.module.scss';

export function CurvedBackgroundWrapper(props) {
  const { children, type = 'light' } = props;
  return (
    <div
      className={c(styles.curvedBackground, {
        [styles.dark]: type === 'dark',
        [styles.light]: type === 'light',
      })}
    >
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  );
}
