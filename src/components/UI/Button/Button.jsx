import React from 'react';
import c from 'classnames';

import styles from './Button.module.scss';

export function Button(props) {
  const { onClick, children, style, className, type, link, size } = props;

  const onClickWrapper = () => {
    if (link) {
      window.open(link, '_blank').focus();
    }

    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      onClick={onClickWrapper}
      type="button"
      className={c(styles.button, className, {
        [styles.primary]: !type || type === 'primary',
        [styles.secondary]: type === 'secondary',
        [styles.regular]: !size || size === 'regular',
        [styles.large]: size === 'large',
      })}
      style={style}
    >
      {children}
    </button>
  );
}
