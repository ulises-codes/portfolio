import type { AppProps } from 'next/app'
import Layout from 'components/Layout'
import 'components/styles/global.css'
import {
  AnimationFeature,
  MotionConfig,
  ExitFeature,
  GesturesFeature,
  AnimateLayoutFeature,
} from 'framer-motion'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MotionConfig
      features={[
        AnimationFeature,
        AnimateLayoutFeature,
        ExitFeature,
        GesturesFeature,
      ]}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  )
}
