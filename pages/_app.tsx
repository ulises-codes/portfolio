if (process.env.NODE_ENV === 'development') {
  import('preact/debug')
}

import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import { MotionFeature } from 'framer-motion'

import type { AppProps } from 'next/app'
import type { MotionConfigProps } from 'framer-motion/types/motion/context/MotionConfigContext'

import 'components/styles/global.scss'
import { useRouter } from 'next/dist/client/router'

import 'lib/register'

const Layout = dynamic(() => import('components/Layout'))

const MotionConfig = dynamic<MotionConfigProps>(() =>
  import('framer-motion').then(mod => mod.MotionConfig)
)

export default function MyApp({ Component, pageProps }: AppProps) {
  const [features, setFeatures] = useState<MotionFeature[]>([])
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'ononline' in window &&
      'onoffline' in window
    ) {
      setIsOnline(window.navigator.onLine)

      if (!window.ononline) {
        window.addEventListener('online', () => {
          setIsOnline(true)
        })
      }

      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          setIsOnline(false)
        })
      }
    }

    import('util/motion-features').then(async mod =>
      setFeatures(await mod.default())
    )
  }, [])

  const router = useRouter()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined &&
      isOnline
    ) {
      if (router.route !== '/') {
        const wb = window.workbox

        wb.active.then(() => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' })
        })
      }
    }
  }, [isOnline, router.route])

  return (
    <MotionConfig features={features}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  )
}
