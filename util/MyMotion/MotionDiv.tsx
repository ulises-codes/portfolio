import { useState, useEffect } from 'react'

import type { m, HTMLMotionProps } from 'framer-motion'

const MotionDiv = ({ children, ...props }: HTMLMotionProps<'div'>) => {
  const [motion, setMotion] = useState<typeof m>()

  useEffect(() => {
    let isMounted = true

    import('framer-motion').then(mod => isMounted && setMotion(mod.m))

    return () => {
      isMounted = false
    }
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
