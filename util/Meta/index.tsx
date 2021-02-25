import Head from 'next/head'

export default function Meta() {
  return (
    <Head key="meta-tags">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      <script src="/getTheme.js"></script>
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
        rel="preload"
        as="style"
        type="text/css"
        crossOrigin="anonymous"
        onLoad={"this.rel='stylesheet';this.onload=null" as any}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=VT323&display=swap&text=DesigndaCobyUlHm.GtRpThurckBMvfEWAL"
        rel="preload"
        as="style"
        type="text/css"
        crossOrigin="anonymous"
        onLoad={"this.rel='stylesheet';this.onload=null" as any}
      />
    </Head>
  )
}
