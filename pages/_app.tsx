if (typeof window !== 'undefined') {
  import('css-paint-polyfill')
}

import 'lib/register'

import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import { useRouter } from 'next/router'

import { LazyMotion } from 'framer-motion'
import type { AppProps } from 'next/app'

import 'components/styles/global.scss'

import themeList from 'lib/themeList'

const Layout = dynamic(() => import('components/Layout'))

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isOnline, setIsOnline] = useState(true)
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>({
    name: 'dark',
  })

  const router = useRouter()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'ononline' in window &&
      'onoffline' in window
    ) {
      setIsOnline(window.navigator.onLine)

      if (!window.ononline) {
        window.addEventListener('online', () => {
          setIsOnline(true)
        })
      }

      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          setIsOnline(false)
        })
      }
    }

    const getThemeFromLocalStorage = () => {
      const body = document.querySelector('body')

      if (!body) return

      const theme = localStorage.getItem('theme')

      const parsedTheme = theme && JSON.parse(theme)

      if (!theme) {
        setCurrentTheme(themeList[1])
      } else {
        body.classList.value = `theme-${parsedTheme.name}`

        setCurrentTheme(parsedTheme)
      }
    }

    getThemeFromLocalStorage()
  }, [])

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined &&
      isOnline
    ) {
      if (router.route !== '/') {
        const wb = window.workbox

        wb.active.then(() => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' })
        })
      }
    }
  }, [isOnline, router.route])

  return (
    <Layout
      theme={{
        currentTheme,
        setCurrentTheme: theme => setCurrentTheme(theme),
      }}
    >
      {router.pathname === '/' ? (
        <LazyMotion
          features={() =>
            import('../util/motion-features').then(mod => mod.default)
          }
        >
          <Component {...pageProps} theme={currentTheme} />
        </LazyMotion>
      ) : (
        <Component {...pageProps} theme={currentTheme} />
      )}
    </Layout>
  )
}
