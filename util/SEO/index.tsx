import Head from 'next/head'
import type { ReactNode } from 'react'

type SEOProps = {
  title?: string
  children?: ReactNode
}

export default function SEO({
  title = 'Developer and Human Being',
  children,
}: SEOProps) {
  return (
    <Head key="seo-tags">
      <title>Ulises Himely | {title}</title>
      {children}
    </Head>
  )
}
