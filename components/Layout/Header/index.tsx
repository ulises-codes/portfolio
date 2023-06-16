import Link from 'next/link';
import styles from './styles.module.css';
import type { Dispatch, SetStateAction } from 'react';
import ThemeMenu from './ThemeMenu';

type HeaderProps = {
  setIsBored: Dispatch<SetStateAction<boolean>>;
  theme: ThemeContextProps;
};

export default function Header({ theme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <nav>
        <Link
          href='/'
          className={styles.logoLink}
          aria-label='ulises-codes-logo'
        >
          <img
            className={styles.logoSymbol}
            src='/images/logo/symbol.svg'
            height='32'
            width='32'
            role='presentation'
            alt=''
          />
          <img
            className={styles.fullLogo}
            src='/images/logo/full-logo.svg'
            height='46'
            width='250'
            role='presentation'
            alt=''
          />
        </Link>
        <div className={styles.navLinks}>
          <ThemeMenu {...theme} />
          <Link href='/blog' className='button'>
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
