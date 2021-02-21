import codepenList from './codepenList'

import Codepen from './Codepen'
import { useScript } from '@ulises-codes/react-hooks'
import { useEffect, useState } from 'react'

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
      <div className="codepens--div">
        {status === 'ready' &&
          codepenList.map(codepenProps => (
            <Codepen key={codepenProps.slug} {...codepenProps} />
          ))}
        <style jsx>{`
          .codepens--div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 1%;
            min-height: 400px;
          }
        `}</style>
      </div>
    </>
  )
}
