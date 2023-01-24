import React from 'react';
import { InfoCard } from '../UI/InfoCard/InfoCard';
import styles from './StakingOptionsSection.module.scss';
import { CurvedBackgroundWrapper } from '../CurvedBackgroundWrapper/CurvedBackgroundWrapper';

const content = [
  {
    title: 'Lockup Rewards',
    description:
      'Lock up liquid tokens for fixed periods to earn additional free upside exposure to any protocol including Dual Finance.',
    imagePath: 'staking-options/staking-options-1',
  },
  {
    title: 'Participation Incentives',
    description:
      'Participate in partner protocol ecosystems and use the products to earn free optionality. Earn DUAL SOs through DIP participation that naturally hedge correlated risk.',
    imagePath: 'staking-options/staking-options-2',
  },
  {
    title: 'Sustainable Liquidity',
    description:
      'Generate self-reinforcing liquidity designed to grow without external input in perpetuity. Supplement token liquidity directily from the protocol Risk Manager.',
    imagePath: 'staking-options/staking-options-3',
  },
  {
    title: 'Token Distribution',
    description:
      'Innovative and non-dilutive Staking Options offer partner projects an alternative token distribution strategy. Harness the power of well aligned incentives to sustainably fund and advance token communities goals.',
    imagePath: 'staking-options/staking-options-4',
  },
];

export function StakingOptionsSection() {
  return (
    <section className={styles.stakingOptionsSection} id="staking">
      <div className={styles.container}>
        <CurvedBackgroundWrapper type="dark">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.title}>Staking Options</h2>
              <div className={styles.description}>
                Breakthrough token incentive mechanism that aligns incentives of participants by granting those who
                lockup liquid tokens or use a protocols features, the right, but not the obligation to purchase tokens
                for a future price. No more free tokens, free options on token.
              </div>
            </div>

            <div className={styles.sectionContent}>
              <div className={styles.grid}>
                <div className={styles.row}>
                  {content.slice(0, 2).map((item) => (
                    <div className={styles.cell} key={item.title}>
                      <InfoCard title={item.title} description={item.description} image={item.imagePath} type="light" />
                    </div>
                  ))}
                </div>
                <div className={styles.row}>
                  {content.slice(2, 4).map((item) => (
                    <div className={styles.cell} key={item.title}>
                      <InfoCard title={item.title} description={item.description} image={item.imagePath} type="light" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CurvedBackgroundWrapper>
      </div>
    </section>
  );
}
