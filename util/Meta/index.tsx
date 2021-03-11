import Head from 'next/head'

export default function Meta() {
  return (
    <Head key="meta-tags">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      <script src="/getTheme.js" />
      <script src="https://www.googletagmanager.com/gtag/js?id=G-M6ZF536ND5" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  gtag('js', new Date());
  gtag('config', 'G-M6ZF536ND5');`,
        }}
      />
    </Head>
  )
}
