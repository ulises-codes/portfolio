import Head from 'next/head'
import codepenList from './codepenList'
import Codepen from './Codepen'

const CODEPEN_SRC = 'https://cpwebassets.codepen.io/assets/embed/ei.js'

export default function Codepens() {
  return (
    <>
      <Head key="codepens">
        <script src={CODEPEN_SRC} async />
      </Head>
      <div className="codepens--div">
        {codepenList.map(codepenProps => (
          <Codepen key={codepenProps.slug} {...codepenProps} />
        ))}
      </div>
    </>
  )
}
