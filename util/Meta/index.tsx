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
    </Head>
  )
}
