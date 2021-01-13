import { createContext, ReactNode, useState } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Header = dynamic(() => import('components/Header'))
const Footer = dynamic(() => import('components/Footer'))
const SEO = dynamic(() => import('components/SEO'))
const Meta = dynamic(() => import('components/Meta'))

const Sidebar = dynamic(() => import('components/Sidebar'))

type Props = {
  children?: ReactNode
}

export const BoredContext = createContext(false)

export default function Layout({ children }: Props) {
  const [isBored, setIsBored] = useState(false)

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
      <Footer />
    </div>
  )
}
