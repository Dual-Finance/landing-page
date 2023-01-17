import React from 'react';
import { InfoCard } from '../UI/InfoCard/InfoCard';
import styles from './StakingOptionsSection.module.scss';
import { CurvedBackgroundWrapper } from '../CurvedBackgroundWrapper/CurvedBackgroundWrapper';

const content = [
  {
    title: 'General Staking Options (GSOs)',
    description:
      'Lock up liquid tokens for fixed periods to earn additional free upside exposure to any protocol including Dual Finance.',
    imagePath: 'staking-options/staking-options-1',
  },
  {
    title: 'Liquidity Staking Options (LSOs)',
    description:
      'Participate in partner protocol ecosystems and use the products to earn free optionality. Earn DUAL LSOs through DIP participation that naturally hedge correlated risk.',
    imagePath: 'staking-options/staking-options-2',
  },
  {
    title: 'Boosted Return',
    description:
      'Earn additional yield on DIPs and other pooled investments through Staking Options. Either sell on the secondary market for a premium or hodl until maturity for unbounded upside.',
    imagePath: 'staking-options/staking-options-3',
  },
  {
    title: 'Base-Layer Incentive Protocol',
    description:
      'Innovative and non-dilutive Staking Options offer partner projects a way out of broken DeFi structures. Harness the power of well aligned incentives to sustainably fund and advance token communities goals.',
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
