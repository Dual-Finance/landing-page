import React from 'react';
import styles from './CallToActionSection.module.scss';
import buttonArrow from '../../assets/hero/button-arrow.svg';
import { Button } from '../UI/Button/Button';
import scoopUpImage from '../../assets/scoopUpImage.svg';
import { DOCS, LAUNCH_APP } from '../../constants/urls';
import { CurvedBackgroundWrapper } from '../CurvedBackgroundWrapper/CurvedBackgroundWrapper';

export function CallToActionSection() {
  return (
    <div className={styles.callToActionSection}>
      <CurvedBackgroundWrapper type="dark">
        <div className={styles.callToActionSectionInner}>
          <div className={styles.imageContainer}>
            <img src={scoopUpImage} alt="x" />
          </div>
          <div className={styles.textContainer}>
            <p> Scoop up DIPs of Sustainable Yield Today! </p>
            <div className={styles.buttons}>
              <Button link={LAUNCH_APP} className={styles.launchBtn} type="primary" size="large">
                Launch app
              </Button>
              <Button link={DOCS} className={styles.readDocsBtn} type="secondary" size="large">
                <div>Read documentation</div>
                <img src={buttonArrow} alt="arrow" />
              </Button>
            </div>
          </div>
        </div>
      </CurvedBackgroundWrapper>
    </div>
  );
}
