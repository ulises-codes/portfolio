import { Dispatch, SetStateAction, useContext } from 'react'
import { BoredContext } from 'components/Layout'
import Link from 'next/link'

type HeaderProps = {
  setIsBored: Dispatch<SetStateAction<boolean>>
}

export default function Header({ setIsBored }: HeaderProps) {
  const isBored = useContext(BoredContext)

  return (
    <header>
      <div className="header-inner--div">
        <nav>
          <Link href="/">
            <a className="header-logo--a">
              <img
                className="header-logo--img"
                src="/images/logo/full-logo.svg"
                alt=""
              />
            </a>
          </Link>
          <button className="bored--btn" onClick={() => setIsBored(!isBored)}>
            {!isBored ? "I'm Bored" : 'Mischief Managed'}
          </button>
        </nav>
      </div>
    </header>
  )
}
