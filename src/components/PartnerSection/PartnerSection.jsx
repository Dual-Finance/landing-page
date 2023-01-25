import React from 'react';
import c from 'classnames';
import styles from './PartnerSection.module.scss';
import { PARTNER_FORM } from '../../constants/urls';

const data = [
  {
    title: 'OpenBook',
    link: PARTNER_FORM,
    imagePath: 'community/openbook-image',
  },
  {
    title: 'Bonk',
    link: PARTNER_FORM,
    imagePath: 'community/bonk-image',
  },
  {
    title: 'GSR',
    link: PARTNER_FORM,
    imagePath: 'community/gsr-image',
  },
  {
    title: 'Mango',
    link: PARTNER_FORM,
    imagePath: 'community/mango-image',
  },
  {
    title: 'Mango',
    link: PARTNER_FORM,
    imagePath: 'community/mango-image',
  },
];

export function PartnerSection() {
  return (
    <section className={styles.partnerSection} id="partner">
      <div className={styles.partnerSectionInner}>
        <div className={styles.title}>
          <h2>Partner with Us</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.row}>
              {data.slice(0, 2).map((item) => (
                <div className={styles.cell} key={item?.title || `partner-title-${item}`}>
                  {!item ? null : (
                    <div className={c(styles.partnerNetworkCard)} key={item?.type}>
                      <a className={styles.linkInner} href={item.link} target="_blank" rel="noreferrer">
                        <div className={styles.cardLinkWrapper}>
                          <div className={styles.networkTitle}>{item.title}</div>
                        </div>
                        <div className={styles.bgImage}>
                          <picture>
                            <img src={`/images/${item.imagePath}.png`} width="120px" height="120px" alt="" />
                          </picture>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.row}>
              {data.slice(2, 4).map((item) => (
                <div className={styles.cell} key={item?.title || `partner-title-${item}`}>
                  {!item ? null : (
                    <div className={c(styles.partnerNetworkCard)} key={item?.type}>
                      <a className={styles.linkInner} href={item.link} target="_blank" rel="noreferrer">
                        <div className={styles.cardLinkWrapper}>
                          <div className={styles.networkTitle}>{item.title}</div>
                        </div>
                        <div className={styles.bgImage}>
                          <picture>
                            <img src={`/images/${item.imagePath}.png`} width="120px" height="120px" alt="" />
                          </picture>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
