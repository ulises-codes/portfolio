import { createContext, useState } from 'react'
import type { ReactNode } from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from './Header'
import Meta from 'util/Meta'

const Footer = dynamic(() => import('./Footer'))
const Sidebar = dynamic(() => import('./Sidebar'))

type Props = {
  children?: ReactNode
  theme: ThemeContextProps
}

export const BoredContext = createContext(false)

export default function Layout({
  children,
  theme: { currentTheme, setCurrentTheme },
}: Props) {
  const [isBored, setIsBored] = useState(false)

  const handleThemeChange = (theme: ThemeProps) => {
    const body = document.querySelector('body')

    const manifest = document.querySelector(
      '#ulises-codes-webmanifest'
    ) as HTMLLinkElement

    const themeMeta = document.querySelector(
      '#ulises-codes-theme-color--meta'
    ) as HTMLMetaElement

    if (!body || !manifest) return

    body.classList.value = `theme-${theme.name}`
    manifest.href = `/webmanifest/${theme.name}.webmanifest`
    themeMeta.setAttribute('content', theme.background_color ?? '#232625')

    const el = document.getElementById('__next')
    if (el && el.dataset.cssPaint) {
      el.dataset.cssPaint = ''
    }

    if (currentTheme?.name !== theme.name) {
      setCurrentTheme(theme)
    }

    localStorage.setItem('theme', JSON.stringify(theme))
  }

  return (
    <>
      <Head key="layout-tags">
        <link
          href={`/fonts/${
            currentTheme.subtitleFont
              ? currentTheme.subtitleFont.toLocaleLowerCase()
              : 'indie-flower'
          }.woff2`}
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Meta />
      <BoredContext.Provider value={isBored}>
        <Header
          setIsBored={setIsBored}
          theme={{
            currentTheme,
            setCurrentTheme: handleThemeChange,
          }}
        />
        <main>
          <Sidebar />
          {children}
        </main>
      </BoredContext.Provider>
      <Footer />
    </>
  )
}
