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

export const AVATAR =
  'e_improve/v1613346960/ulises.codes/avatars/IMG_6191_ywrvt1.jpg'
