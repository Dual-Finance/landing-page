import React from 'react';
import dualFiLogo from '../../assets/header/logo.svg';
import styles from './Logo.module.scss';

export function Logo() {
  return (
    <a className={styles.logo} href="#">
      <img src={dualFiLogo} alt="x" />
    </a>
  );
}
