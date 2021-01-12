import { createContext, ReactNode, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Sidebar = dynamic(() => import('components/Sidebar'))

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
          href="/images/logo/favicon.svg"
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
