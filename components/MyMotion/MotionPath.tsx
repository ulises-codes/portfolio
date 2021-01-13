import { useState, useEffect } from 'react'

import type { m, SVGMotionProps } from 'framer-motion'

export default function MotionDiv({
  ...props
}: SVGMotionProps<SVGPathElement>) {
  const [motion, setMotion] = useState<typeof m>()

  useEffect(() => {
    import('framer-motion').then(mod => setMotion(mod.m))
  }, [])

  if (!motion)
    return <path d={props.d && props.d.toString()} style={{ opacity: 0 }} />
  return <motion.path {...props} />
}
