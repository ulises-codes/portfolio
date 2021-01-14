import { useContext } from 'react'
import { BoredContext } from 'components/Layout'
import Link from 'next/link'

import styles from './styles.module.css'

import type { Dispatch, SetStateAction } from 'react'

type HeaderProps = {
  setIsBored: Dispatch<SetStateAction<boolean>>
}

export default function Header({ setIsBored }: HeaderProps) {
  const isBored = useContext(BoredContext)

  return (
    <header>
      <div className={styles['header-inner--div']}>
        <nav>
          <Link href="/">
            <a>
              <img
                className={styles['header-logo--img']}
                src="/images/logo/full-logo.svg"
                alt="Logo"
                height="46"
                width="250"
              />
            </a>
          </Link>
          <button onClick={() => setIsBored(!isBored)}>
            {!isBored ? "I'm Bored" : 'Mischief Managed'}
          </button>
        </nav>
      </div>
    </header>
  )
}
