import { createContext, useEffect, useRef, useState } from 'react'
import type { MutableRefObject, ReactNode } from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'

import Header from 'components/Header'
import SEO from 'components/SEO'
import Meta from 'components/Meta'

const Footer = dynamic(() => import('components/Footer'))
const Sidebar = dynamic(() => import('components/Sidebar'))

type Props = {
  children?: ReactNode
}

export const BoredContext = createContext(false)

export default function Layout({ children }: Props) {
  const [isBored, setIsBored] = useState(false)
  const [showFooter, setShowFooter] = useState(false)

  const footerRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, ob) => {
        for (let entry of entries) {
          if (
            entry.target.id === 'Footer' &&
            entry.isIntersecting &&
            !showFooter
          ) {
            setShowFooter(true)
            ob.unobserve(entry.target)
          }
        }
      },
      {
        root: undefined,
      }
    )

    if (!showFooter) observer.observe(footerRef.current)

    return () => observer.disconnect()
  }, [showFooter])

  return (
    <div>
      <Head key="layout head">
        <title>Ulises Himely | Developer and Human Being</title>
        <SEO />
      </Head>
      <Meta />
      <BoredContext.Provider value={isBored}>
        <Header setIsBored={setIsBored} />
        <main>
          <Sidebar />
          {children}
        </main>
      </BoredContext.Provider>
      <div id="Footer" ref={footerRef} style={{ minHeight: `200px` }}>
        {showFooter && <Footer />}
      </div>
    </div>
  )
}
