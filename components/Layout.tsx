import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import dynamic from 'next/dynamic'
import Header from 'components/Header'
import Meta from 'components/Meta'
import themeList from 'lib/themeList'

const Footer = dynamic(() => import('components/Footer'))
const Sidebar = dynamic(() => import('components/Sidebar'))

type Props = {
  children?: ReactNode
}

type ThemeProps = {
  name: string
  displayName?: string
  titleFont: string
  subtitleFont: string
}
type ThemeContextProps = {
  currentTheme?: ThemeProps
  setCurrentTheme?: (theme: ThemeProps) => void
}

export const BoredContext = createContext(false)
export const ThemeContext = createContext<ThemeContextProps>({})

export default function Layout({ children }: Props) {
  const [isBored, setIsBored] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<ThemeProps>({
    name: 'default',
    titleFont: '',
    subtitleFont: '',
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

    if (!body) return

    body.classList.value = `theme-${theme.name}`

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
      <Meta />
      <ThemeContext.Provider
        value={{
          currentTheme,
          setCurrentTheme: handleThemeChange,
        }}>
        <BoredContext.Provider value={isBored}>
          <Header setIsBored={setIsBored} />
          <main>
            <Sidebar />
            {children}
          </main>
        </BoredContext.Provider>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}
