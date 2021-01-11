import { createContext, ReactNode, useState } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'
import Footer from 'components/Footer'

type Props = {
  children?: ReactNode
}

export const BoredContext = createContext(false)

export default function Layout({ children }: Props) {
  const [isBored, setIsBored] = useState(false)

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="/worklets/register.js"
          rel="preload"
          as="script"
          type="text/javascript"
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
          rel="shortcut icon"
          href="/images/logo/logo-symbol.svg"
          type="image/x-icon"
        />
        <link
          rel="preconnect"
          href="https://cpwebassets.codepen.io/assets/embed/ei.js"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/llx7qor.css"
          as="font"
        />
      </Head>
      <BoredContext.Provider value={isBored}>
        <Header setIsBored={setIsBored} />
        <main>
          <Sidebar />
          {children}
        </main>
      </BoredContext.Provider>
      <Footer />
    </div>
  )
}
