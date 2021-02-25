import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import dynamic from 'next/dynamic'
import Header from './Header'
import Meta from 'util/Meta'
import themeList from 'lib/themeList'
import Head from 'next/head'

const Footer = dynamic(() => import('./Footer'))
const Sidebar = dynamic(() => import('./Sidebar'))

type Props = {
  children?: ReactNode
}

export const BoredContext = createContext(false)

export default function Layout({ children }: Props) {
  const [isBored, setIsBored] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>({
    name: 'default',
  })

  useEffect(() => {
    const getThemeFromLocalStorage = () => {
      const body = document.querySelector('body')

      if (!body) return

      const theme = localStorage.getItem('theme')

      const parsedTheme = theme && JSON.parse(theme)

      if (!theme) {
        setCurrentTheme(themeList[0])
      } else {
        body.classList.value = `theme-${parsedTheme.name}`

        setCurrentTheme(parsedTheme)
      }
    }

    getThemeFromLocalStorage()
  }, [])

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
    themeMeta.setAttribute('content', theme.background_color ?? '#f1dd6d')

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
          href={`https://fonts.googleapis.com/css2?family=${
            currentTheme.titleFont ?? 'Bungee+Shade'
          }&display=block`}
          rel="preload"
          as="style"
          type="text/css"
          crossOrigin="anonymous"
          onLoad={"this.rel='stylesheet';this.onload=null" as any}
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${
            currentTheme.subtitleFont ?? 'Indie+Flower'
          }&display=swap`}
          rel="preload"
          as="style"
          type="text/css"
          crossOrigin="anonymous"
          onLoad={"this.rel='stylesheet';this.onload=null" as any}
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
