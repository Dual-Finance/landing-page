import React from 'react';
import styles from './DualInvestmentSection.module.scss';

import { InfoCard } from '../UI/InfoCard/InfoCard';
import { CurvedBackgroundWrapper } from '../CurvedBackgroundWrapper/CurvedBackgroundWrapper';

export const content = [
  {
    title: 'Streaming Prices',
    imagePath: 'dual_investment/dual-inv-1',
    description:
      'Live streaming prices allow for better risk management and market timing while putting assets to work for longer.',
  },
  {
    title: 'Customizable Yield',
    imagePath: 'dual_investment/dual-inv-2',
    description:
      'Empower users with freedom to spread out risk and diversify yield farming across multiple strikes, maturities and products.',
  },
  {
    title: 'Transparent Premiums',
    imagePath: 'dual_investment/dual-inv-3',
    description:
      'Compare yield across products, maturities and strikes via a normalized % APY, but deposit based on fixed stablecoin premiums.',
  },
  {
    title: 'Straightforward Settlement',
    imagePath: 'dual_investment/dual-inv-4',
    description:
      'Receive stablecoin premium immediately upon deposit to further earn yield during the life of the option. Physical settlement smooths risk profiles and allows for flexible expiry timing.',
  },
];

export function DualInvestmentSection() {
  return (
    <section className={styles.dualInvestmentSection}>
      <div className={styles.container}>
        <CurvedBackgroundWrapper>
          <div className={styles.dualInvestmentWrapper} id="pools">
            <div className={styles.sectionHeader}>
              <div className={styles.title}>
                <h2>Dual Investment Pools</h2>
              </div>

              <div className={styles.description}>
                Our flagship product DIPs advance and improve the crypto market standard implementation of Decentralized
                Option Vaults (DOVs).
              </div>
            </div>
            <div className={styles.sectionContent}>
              <div className={styles.grid}>
                <div className={styles.row}>
                  {content.slice(0, 2).map((item) => (
                    <div className={styles.cell} key={item.title}>
                      <InfoCard title={item.title} description={item.description} image={item.imagePath} />
                    </div>
                  ))}
                </div>
                <div className={styles.row}>
                  {content.slice(2, 4).map((item) => (
                    <div className={styles.cell} key={item.title}>
                      <InfoCard title={item.title} description={item.description} image={item.imagePath} />
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
