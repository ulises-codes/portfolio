import Head from 'next/head'
import codepenList from './codepenList'

import Codepen from './Codepen'

export default function Codepens() {
  return (
    <>
      <Head key="codepens">
        <script src="https://cpwebassets.codepen.io/assets/embed/ei.js" async />
      </Head>
      <div className="codepens--div">
        {codepenList.map(codepenProps => (
          <Codepen key={codepenProps.slug} {...codepenProps} />
        ))}

        <style jsx>{`
          .codepens--div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 49%));
            gap: 1%;
          }
        `}</style>
      </div>
    </>
  )
}
