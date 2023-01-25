import React from 'react';
import c from 'classnames';
import styles from './HeroSection.module.scss';
import solanaLogo from '../../assets/hero/solana-logo.svg';
import buttonArrow from '../../assets/hero/button-arrow.svg';
import summerCamp from '../../assets/hero/solana-summer-camp-hackathon-image.png';
import { Button } from '../UI/Button/Button';
import { DOCS, LAUNCH_APP } from '../../constants/urls';
import { ResponsiveImage } from '../UI/ResponsiveImage/ResponsiveImage';

export function HeroSection() {
  return (
    <section className={styles.heroSection} id="about">
      <div className={styles.container}>
        <div className={styles.sectionWrapper}>
          <div className={styles.grid}>
            <div className={styles.row}>
              <div className={styles.cell}>
                <div className={styles.textBlock}>
                  <h1 className={styles.title}>Dual Finance</h1>
                  <p className={styles.description}>Incentive Liquidity Infrastructure for Web3 Communities</p>
                  <div className={styles.buttons}>
                    <Button link={LAUNCH_APP} className={styles.launchBtn} type="primary" size="large">
                      Launch App
                    </Button>
                    <Button link={DOCS} className={styles.readDocsBtn} type="secondary" size="large">
                      <div>Read documentation</div>
                      <img src={buttonArrow} alt="arrow" />
                    </Button>
                  </div>

                  <div className={styles.builtOn}>
                    <div className={styles.builtOnText}>Built on:</div>
                    <img src={solanaLogo} alt="solana" className={styles.solanaLogo} />
                  </div>
                  <div className={styles.winners}>
                    <div className={styles.winnersText}>DeFi Champions:</div>
                    <img src={summerCamp} alt="solana" className={styles.summerLogo} />
                  </div>
                </div>
              </div>

              <div className={c(styles.cell, styles.illustrationCell)}>
                <div className={styles.illustration}>
                  <ResponsiveImage path="hero/hero-image-desktop" width="100%" height="100%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
