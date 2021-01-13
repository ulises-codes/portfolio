import { useState, useEffect } from 'react'
import type { HTMLAttributes } from 'react'

import type { MotionProps, m } from 'framer-motion'

const MotionDiv = ({
  children,
  ...props
}: MotionProps & HTMLAttributes<HTMLDivElement>) => {
  const [motion, setMotion] = useState<typeof m>()

  useEffect(() => {
    import('framer-motion').then(mod => setMotion(mod.m))
  }, [])

  if (!motion)
    return (
      <div className={props.className}>
        <div style={{ opacity: 0 }}>{children}</div>
      </div>
    )
  return <motion.div {...props}>{children}</motion.div>
}

export default MotionDiv
