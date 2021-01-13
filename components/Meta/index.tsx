import Head from 'next/head'

export default function Meta() {
  return (
    <Head key="meta-tags">
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      <link
        rel="preconnect"
        href="https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js"
      />
      <link
        href="https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js"
        rel="preload"
        as="script"
        type="text/javascript"
        crossOrigin="anonymous"
      />
      <script src="/worklets/register.js" async />
      <link
        rel="shortcut icon"
        href="/images/logo/favicon.svg"
        type="image/x-icon"
      />
      <link rel="alternate icon" href="/images/logo/favicon.png" />
      <link rel="mask-icon" href="/images/logo/mask-icon.svg" color="#f1dd6d" />
      <link
        href="/worklets/register.js"
        rel="preload"
        as="script"
        type="text/javascript"
      />
      <link
        href="/fonts/bungee-shade.woff2"
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        href="/fonts/open-sans.woff2"
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        href="/fonts/indie-flower.woff2"
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://use.typekit.net/llx7qor.css"
        as="font"
        crossOrigin="anonymous"
        onLoad={"this.onload=null;this.rel='stylesheet'" as any}
      />
    </Head>
  )
}