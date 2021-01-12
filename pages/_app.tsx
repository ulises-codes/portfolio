import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import 'components/styles/global.css'
import { MotionFeature } from 'framer-motion'
import dynamic from 'next/dynamic'

const MotionConfig = dynamic<any>(() =>
  import('framer-motion').then(mod => mod.MotionConfig)
)

export default function MyApp({ Component, pageProps }: AppProps) {
  const [features, setFeatures] = useState<MotionFeature[]>([])

  useEffect(() => {
    import('util/motion-features').then(mod => setFeatures(mod.default))
  }, [])

  return (
    <MotionConfig features={features}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  )
}
