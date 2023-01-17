import React, { useEffect, useRef, useState } from 'react';
import c from 'classnames';
import * as bs from 'black-scholes';
import { parsePriceData } from '@pythnetwork/client';
import { Connection, PublicKey } from '@solana/web3.js';
import { Logo } from '../Logo';
import btcLogo from '../../assets/header/btcLogo.svg';
import ethLogo from '../../assets/header/ethLogo.svg';
import solLogo from '../../assets/header/solLogo.svg';
import styles from './Header.module.scss';
import { menu } from '../../constants/menu';
import { Button } from '../UI/Button/Button';
import { DISCORD, LAUNCH_APP } from '../../constants/urls';
import discordLogo from '../../assets/header/socialLogo/discordLogo.svg';
import instLogo from '../../assets/header/socialLogo/instLogo.svg';
import mediumLogo from '../../assets/header/socialLogo/mediumLogo.svg';
import twitterLogo from '../../assets/header/socialLogo/twitterLogo.svg';
import { getMultipleAccounts, parseDipState } from '../../utils/contract/utils';

export function Header() {
  const elementRef = useRef();
  const BTC = '9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E';
  const ETH = '2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk';
  const SOL = 'So11111111111111111111111111111111111111112';
  const MNGO = 'MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac';
  const BONK = 'DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263';
  const [scrollableSize, setScrollableSize] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuButtonIsActive, setMenuButton] = useState(false);
  const [apyRanges, setApyRanges] = useState({
    [BTC]: [0, 0],
    [ETH]: [0, 0],
    [SOL]: [0, 0],
  });
  const [btcApy, setBtcApy] = useState(0);
  const [ethApy, setEthApy] = useState(0);
  const [solApy, setSolApy] = useState(0);

  const handleScroll = () => {
    setScrollPosition(elementRef?.current?.scrollLeft);
    setScrollableSize(elementRef.current.scrollWidth - window.innerWidth);
  };

  useEffect(() => {
    const refreshAPY = async () => {
      const connection = new Connection(
        'https://floral-skilled-borough.solana-mainnet.discover.quiknode.pro/38cf24edefbebeb60eb7516eff40f076ac0823af/'
      );
      let freshPrices = {};
      try {
        const priceInfos = await getMultipleAccounts(
          connection,
          [
            'GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU',
            'JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB',
            'H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG',
          ],
          'confirmed'
        );
        freshPrices = {
          [BTC]: Math.round(parsePriceData(priceInfos.array[0].data).price * 100) / 100,
          [ETH]: Math.round(parsePriceData(priceInfos.array[1].data).price * 100) / 100,
          [SOL]: Math.round(parsePriceData(priceInfos.array[2].data).price * 100) / 100,
        };
      } catch (error) {
        /* eslint-disable no-console */
        console.log(error);
        /* eslint-enable no-console */
      }

      const VOL_MAP = {
        [BTC]: 0.3,
        [ETH]: 0.4,
        [SOL]: 0.5,
        [MNGO]: 0.6,
        [BONK]: 1.0,
      };
      const rfRate = 0.03; // Risk Free Rate of Return ~ T-Bill Rate
      const programAccountsPromise = connection.getProgramAccounts(
        new PublicKey('DiPbvUUJkDhV9jFtQsDFnMEMRJyjW5iS6NMwoySiW8ki')
      );

      // @ts-ignore
      programAccountsPromise.then(
        // @ts-ignore
        (data) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const programAccount of data) {
            try {
              if (programAccount.account.data.length !== 260) {
                // eslint-disable-next-line no-continue
                continue;
              }
              const dipState = parseDipState(programAccount.account.data);

              const strike = dipState.strike / 1_000_000;
              const { expiration } = dipState;
              const { splMint } = dipState;

              const durationMs = expiration * 1_000 - Date.now();
              if (durationMs < 0) {
                // eslint-disable-next-line no-continue
                continue;
              }
              const fractionOfYear = durationMs / 31_536_000_000;

              const currentPrice = freshPrices[splMint.toBase58()];
              const vol = VOL_MAP[splMint.toBase58()];

              const price = bs.blackScholes(currentPrice, strike, fractionOfYear, vol, rfRate, 'call') * 1_000_000;
              const earnedRatio = price / currentPrice;
              const apr = earnedRatio / fractionOfYear / 1_000_000;
              const apy = Math.floor(((1 + apr * fractionOfYear) ** (1 / fractionOfYear) - 1) * 100);

              if (durationMs >= 43_200_000 && strike > currentPrice && apy > 1) {
                apyRanges[splMint.toBase58()][0] = Math.min(apyRanges[splMint.toBase58()][0], apy);
                apyRanges[splMint.toBase58()][1] = Math.max(apyRanges[splMint.toBase58()][1], apy);
              }

              // Do not show any DIP that is less than 12 hours or 1% apy
              if (durationMs <= 43_200_000 || strike < currentPrice || apy < 1) {
                // eslint-disable-next-line no-continue
                continue;
              }

              setApyRanges(apyRanges);
              setBtcApy(apyRanges[BTC][1]);
              setEthApy(apyRanges[ETH][1]);
              setSolApy(apyRanges[SOL][1]);
            } catch (error) {
              // eslint-disable-next-line no-console
              console.log(error);
            }
          }
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error);
        }
      );
    };
    refreshAPY();
  }, [apyRanges]);

  useEffect(() => {
    const refInstance = elementRef?.current;
    if (refInstance) {
      refInstance.addEventListener('scroll', handleScroll);
    }

    return () => {
      refInstance.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName('body')[0];
    const rootElement = document.getElementById('root');
    if (menuButtonIsActive) {
      bodyElement.classList.add('active');
      rootElement.classList.add('active');
    } else {
      bodyElement.classList.remove('active');
      rootElement.classList.remove('active');
    }
  }, [menuButtonIsActive]);

  return (
    <header className={styles.header}>
      <div className={menuButtonIsActive ? styles.menuShadowWrapper : ''}>
        <div className={styles.menuShadow} />
      </div>
      <div className={styles.container}>
        <div className={styles.items}>
          <div className={styles.dualFiLogo}>
            <Logo />
          </div>
          <div className={styles.rightCol}>
            <div className={styles.menu}>
              {menu.map((item) => (
                <a href={item.path} key={item.title}>
                  {item.title}
                </a>
              ))}
            </div>
            <div className={styles.buttons}>
              <Button link={LAUNCH_APP}>Launch app</Button>
              <Button
                type="secondary"
                className={c(styles.mobileMenuToggle, menuButtonIsActive && styles.active)}
                onClick={() => setMenuButton(!menuButtonIsActive)}
                role="button"
                tabIndex={0}
              >
                <span />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.basement}>
        <div className={styles.container}>
          <div className={styles.sliderWrapperLeft} style={{ display: scrollPosition >= 10 ? 'block' : 'none' }}>
            <div className={styles.sliderIcon} />
          </div>

          <div className={styles.basementItemsWrapper} ref={elementRef}>
            <div className={styles.basementItems}>
              <img className={styles.logo} src={btcLogo} alt="x" />
              <div className={styles.title}>BTC:</div>
              <a href="https://beta.dual.finance/" target="_blank" rel="noreferrer" className={styles.value}>
                {btcApy > 0 ? <div>{btcApy}%&ensp;</div> : <div>N/A&nbsp;</div>}
                <div>Max APY</div>
              </a>
            </div>
            <div className={styles.basementItems}>
              <img className={styles.logo} src={ethLogo} alt="x" />
              <div className={styles.title}>ETH:</div>
              <a href="https://beta.dual.finance/" target="_blank" rel="noreferrer" className={styles.value}>
                {ethApy > 0 ? <div>{ethApy}%&ensp;</div> : <div>N/A&nbsp;</div>}
                <div>Max APY</div>
              </a>
            </div>
            <div className={styles.basementItems}>
              <img className={styles.logo} src={solLogo} alt="x" />
              <div className={styles.title}>SOL:</div>
              <a href="https://beta.dual.finance/" target="_blank" rel="noreferrer" className={styles.value}>
                {solApy > 0 ? <div>{solApy}%&ensp;</div> : <div>N/A&nbsp;</div>}
                <div>Max APY</div>
              </a>
            </div>
          </div>

          {scrollPosition <= scrollableSize && (
            <div className={c(styles.sliderWrapperRight)}>
              <div className={styles.sliderIcon} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.mobileMenuWrapper}>
        <div className={c(styles.mobileMenu, menuButtonIsActive && styles.active)}>
          <div className={styles.mobileItems}>
            {menu.map((item) => (
              <a href={item.path} onClick={() => setMenuButton(!menuButtonIsActive)} key={item.title}>
                {item.title}
              </a>
            ))}
          </div>
          <div className={styles.headerSocialLinks}>
            <a href={DISCORD} rel="noreferrer" target="_blank" onClick={() => setMenuButton(!menuButtonIsActive)}>
              <img src={discordLogo} alt="instagram" />
            </a>
            <a
              href="https://www.instagram.com/dual.finance/?hl=en"
              rel="noreferrer"
              target="_blank"
              onClick={() => setMenuButton(!menuButtonIsActive)}
            >
              <img src={instLogo} alt="instagram" />
            </a>
            <a
              href="https://medium.com/@dualfinance"
              rel="noreferrer"
              target="_blank"
              onClick={() => setMenuButton(!menuButtonIsActive)}
            >
              <img src={mediumLogo} alt="medium" />
            </a>
            <a
              href="https://twitter.com/DualFinance"
              rel="noreferrer"
              target="_blank"
              onClick={() => setMenuButton(!menuButtonIsActive)}
            >
              <img src={twitterLogo} alt="twitter" />
            </a>
          </div>
          <a href="https://beta.dual.finance/" rel="noreferrer" target="_blank">
            <Button className={styles.mobileMenuButton} onClick={() => setMenuButton(!menuButtonIsActive)}>
              Launch app
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}