import { useState, useEffect } from 'react'

import type { m, SVGMotionProps } from 'framer-motion'

export default function MotionPath(props: SVGMotionProps<SVGPathElement>) {
  const [motion, setMotion] = useState<typeof m>()

  useEffect(() => {
    let isMounted = true

    import('framer-motion').then(mod => isMounted && setMotion(mod.m))

    return () => {
      isMounted = false
    }
  }, [])

  if (!motion) {
    return <path d={props.d && props.d.toString()} style={{ opacity: 0 }} />
  }

  return <motion.path {...props} />
}
