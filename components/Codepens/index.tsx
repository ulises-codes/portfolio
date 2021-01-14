import Head from 'next/head'
import codepenList from './codepenList'

import styles from './styles.module.css'

import Codepen from './Codepen'

export default function Codepens() {
  return (
    <>
      <Head key="codepens">
        <script src="https://cpwebassets.codepen.io/assets/embed/ei.js" async />
      </Head>
      <div className={styles['codepens--div']}>
        {codepenList.map(codepenProps => (
          <Codepen key={codepenProps.slug} {...codepenProps} />
        ))}
      </div>
    </>
  )
}
