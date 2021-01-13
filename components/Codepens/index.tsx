import dynamic from 'next/dynamic'
import Head from 'next/head'
import codepenList from './codepenList'

const Codepen = dynamic(() => import('./Codepen'))

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
      </div>
    </>
  )
}
