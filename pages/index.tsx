import type { PageProps } from 'interfaces'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const HomePageSections = dynamic(() => import('components/HomePage'))

export default function IndexPage({ theme }: PageProps) {
  return (
    <>
      <Head key="home-page-tags">
        <link
          href={
            theme && theme.titleFont
              ? `https://fonts.googleapis.com/css2?family=${theme.titleFont}&display=block&text=Greetings.IamUlises.`
              : ''
          }
          rel="preload"
          as="style"
          type="text/css"
          crossOrigin="anonymous"
          onLoad={"this.rel='stylesheet'" as any}
        />
      </Head>
      <HomePageSections />
    </>
  )
}
