import React from 'react';
import { RoadmapItem } from './RoadmapItem/RoadmapItem';
import styles from './RoadmapSection.module.scss';
import { CurvedBackgroundWrapper } from '../CurvedBackgroundWrapper/CurvedBackgroundWrapper';

const ROAD_MAP = [
  {
    title: 'Staking Option Studio',
    description:
      'Partner with Dual Finance and engineer token incentive structures leveraging an easy-to-use UI. DUAL holders gain diversified upside exposure to a subset of responsibly designed protocols.',
  },
  {
    title: 'Staking Options Fair Launch',
    description:
      'DUAL tokens will be distributed purely through options based means. Dual Finance will therefore be the first and only crypto token project to launch without having directly sold any tokens. Participate in DIPs to access DUAL through LSOs at launch!',
  },
  {
    title: 'Rehypothecated Lending Pool (RLPs)',
    description:
      'Provides users additional yield on deposited collateral by lending to approved liquidity providers to achieve a more capitally efficient market.',
  },
  {
    title: 'DUAL DAO & Constitution',
    description:
      "Initialize parameters via a Constitution that are in the best interest of the treasury over the long term. DUAL DAO's mandate will to ensure ensure the protocol is able to operate in perpetuity absent of early contributors. The goal is to create a DAO and treasury that is secure and self-sustaining.",
  },
  {
    title: 'Staking Option Marketplace',
    description:
      "Earn Staking Options from one of our partner projects and bootstrap your token's options market! Facilitate Staking Option price discovery for Users and sell your rewards easily for cash.",
  },
];

export function RoadmapSection() {
  return (
    <section className={styles.roadmapSection} id="roadmap">
      <div className={styles.container}>
        <CurvedBackgroundWrapper type="light">
          <div className={styles.roadmapSectionContent}>
            <div className={styles.descriptionBlock}>
              <h2 className={styles.title}>Roadmap</h2>
              <div className={styles.description}>
                Dual Finance believes Decentralized Finance provides the perfect experimental platform for new
                option-based incentives to proliferate and intends to be a driving force in their design, implementation
                and distribution. Throughout this engineering process, the Dual Finance DAO will guide and steward the
                DUAL token to be a requisite asset in any token options-based incentive plan.
              </div>
            </div>
            <div className={styles.roadmap}>
              {ROAD_MAP.map((item, index) => (
                <RoadmapItem
                  index={index + 1}
                  isArrow={index !== ROAD_MAP.length - 1}
                  title={item.title}
                  description={item.description}
                  key={item.title}
                />
              ))}
            </div>
          </div>
        </CurvedBackgroundWrapper>
      </div>
    </section>
  );
}
