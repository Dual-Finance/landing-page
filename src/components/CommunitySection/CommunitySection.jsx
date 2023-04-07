import React from 'react';
import c from 'classnames';
import styles from './CommunitySection.module.scss';
import { DISCORD, INSTAGRAM, MEDIUM, TWITTER, REALMS, GITHUB } from '../../constants/urls';
import { ResponsiveImage } from '../UI/ResponsiveImage/ResponsiveImage';

const data = [
  {
    title: 'Discord',
    link: DISCORD,
    imagePath: 'community/discord-image',
  },
  {
    title: 'Instagram',
    link: INSTAGRAM,
    imagePath: 'community/instagram-image',
  },
  {
    title: 'Medium',
    link: MEDIUM,
    imagePath: 'community/medium-image',
  },
  {
    title: 'Twitter',
    link: TWITTER,
    imagePath: 'community/twitter-image',
  },
  {
    title: 'Realms',
    link: REALMS,
    imagePath: 'community/realms-image',
  },
  {
    title: 'Github',
    link: GITHUB,
    imagePath: 'community/github-image',
  },
];

export function CommunitySection() {
  return (
    <section className={styles.communitySection} id="community">
      <div className={styles.communitySectionInner}>
        <div className={styles.title}>
          <h2>
            Become part of our
            <br />
            Community
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.row}>
              {data.slice(0, 2).map((item) => (
                <div className={styles.cell} key={item.title}>
                  <div className={c(styles.socialNetworkCard, styles[item.type])} key={item.type}>
                    <a className={styles.linkInner} href={item.link} target="_blank" rel="noreferrer">
                      <div className={styles.cardLinkWrapper}>
                        <div className={styles.networkTitle}>{item.title}</div>
                      </div>
                      <div className={styles.bgImage}>
                        <ResponsiveImage path={item.imagePath} height="100%" width="auto" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.row}>
              {data.slice(2, 4).map((item) => (
                <div className={styles.cell} key={item.title}>
                  <div className={c(styles.socialNetworkCard)} key={item.type}>
                    <a className={styles.linkInner} href={item.link} target="_blank" rel="noreferrer">
                      <div className={styles.cardLinkWrapper}>
                        <div className={styles.networkTitle}>{item.title}</div>
                      </div>
                      <div className={styles.bgImage}>
                        <ResponsiveImage path={item.imagePath} height="100%" width="auto" />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.row}>
              {data.slice(4, 6).map((item) => (
                <div className={styles.cell} key={item.title}>
                  <div className={c(styles.socialNetworkCard)} key={item?.type}>
                    <a className={styles.linkInner} href={item.link} target="_blank" rel="noreferrer">
                      <div className={styles.cardLinkWrapper}>
                        <div className={styles.networkTitle}>{item.title}</div>
                      </div>
                      <div className={styles.bgImage}>
                        <picture>
                          <img src={`/images/${item.imagePath}.png`} width="110px" height="108px" alt="" />
                        </picture>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
