import React from 'react';
import styles from './Footer.module.scss';
import { Logo } from '../Logo';
import { menu } from '../../constants/menu';
import { Button } from '../UI/Button/Button';
import { LAUNCH_APP } from '../../constants/urls';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topBlock}>
        <div className={styles.dualFiLogo}>
          <Logo />
        </div>
        <div className={styles.menu}>
          <div className={styles.links}>
            <div className={styles.col}>
              {menu.slice(0, 2).map((item) => (
                <a href={item.path} key={item.title}>
                  {item.title}
                </a>
              ))}
            </div>
            <div className={styles.col}>
              {menu.slice(2, 4).map((item) => (
                <a href={item.path} key={item.title}>
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <Button link={LAUNCH_APP}>Launch app</Button>
        </div>
      </div>

      <div className={styles.bottomBlock}>© 2023 Dual Labs. All rights reserved.</div>
    </footer>
  );
}
