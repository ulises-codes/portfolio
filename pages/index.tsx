import type { PageProps } from 'interfaces'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const HomePageSections = dynamic(() => import('components/HomePage'))

export default function IndexPage({ theme }: PageProps) {
  return (
    <>
      <Head key="home-page-tags">
        <link
          href={`/fonts/${
            theme.titleFont ? theme.titleFont.toLowerCase() : 'bungee-shade'
          }.woff2`}
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <HomePageSections />
    </>
  )
}
