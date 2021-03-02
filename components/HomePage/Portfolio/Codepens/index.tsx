import codepenList from './codepenList'

import Codepen from './Codepen'
import { useScript } from '@ulises-codes/react-hooks'
import { useEffect, useState } from 'react'

import styles from './styles.module.scss'

export default function Codepens() {
  const [src, setSrc] = useState('')

  const status = useScript({ src, defer: false })

  useEffect(() => {
    if (status !== 'ready' && !src) {
      setSrc('https://cpwebassets.codepen.io/assets/embed/ei.js')
    }

    if (status === 'ready' && '__CPEmbed' in window) {
      window.__CPEmbed()
    }
  }, [status, src])

  return (
    <>
      <div className={styles.codepens}>
        {status === 'ready' &&
          codepenList.map(codepenProps => (
            <Codepen key={codepenProps.slug} {...codepenProps} />
          ))}
      </div>
    </>
  )
}
