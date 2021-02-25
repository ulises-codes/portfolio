import { useContext } from 'react'
import { BoredContext } from 'components/Layout'
import Link from 'next/link'
import FullLogo from 'public/images/logo/full-logo.svg'
import LogoSymbol from 'public/images/logo/symbol.svg'

import styles from './styles.module.css'

import type { Dispatch, SetStateAction } from 'react'
import ThemeMenu from './ThemeMenu'
import { useRouter } from 'next/dist/client/router'

type HeaderProps = {
  setIsBored: Dispatch<SetStateAction<boolean>>
  theme: ThemeContextProps
}

export default function Header({ setIsBored, theme }: HeaderProps) {
  const isBored = useContext(BoredContext)
  const router = useRouter()

  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a
            className={['not-hyperlink', styles.logoLink].join(' ')}
            aria-label="ulises-codes-logo">
            <LogoSymbol className={styles.logoSymbol} height="32" width="32" />
            <FullLogo className={styles.fullLogo} height="46" width="250" />
          </a>
        </Link>
        <div className={styles.navLinks}>
          <div className={styles.bored}>
            {router.pathname === '/' && (
              <button className="button" onClick={() => setIsBored(!isBored)}>
                {!isBored ? (
                  "I'm Bored"
                ) : (
                  <>
                    <span>Mischief</span>
                    <span>Managed</span>
                  </>
                )}
              </button>
            )}
          </div>
          <ThemeMenu {...theme} />
          <Link href="/blog">
            <a className="not-hyperlink link">Blog</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
