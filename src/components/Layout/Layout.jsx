import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.scss';

export function Layout({ children }) {
  return (
    <div className={styles.defaultLayout}>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
}
