import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import { MotionFeature } from 'framer-motion'

import type { AppProps } from 'next/app'
import type { MotionConfigProps } from 'framer-motion/types/motion/context/MotionConfigContext'

import 'components/styles/global.scss'

const Layout = dynamic(() => import('components/Layout'))

const MotionConfig = dynamic<MotionConfigProps>(() =>
  import('framer-motion').then(mod => mod.MotionConfig)
)

export default function MyApp({ Component, pageProps }: AppProps) {
  const [features, setFeatures] = useState<MotionFeature[]>([])

  useEffect(() => {
    import('util/motion-features').then(async mod =>
      setFeatures(await mod.default())
    )
  }, [])

  return (
    <MotionConfig features={features}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  )
}
