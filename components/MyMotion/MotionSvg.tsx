import { useState, useEffect } from 'react'
import type { m, SVGMotionProps } from 'framer-motion'

export default function MotionDiv({
  children,
  ...props
}: SVGMotionProps<SVGSVGElement>) {
  const [motion, setMotion] = useState<typeof m>()

  useEffect(() => {
    import('framer-motion').then(mod => setMotion(mod.m))
  }, [])

  if (!motion)
    return (
      <svg
        height={props.height && props.height.toString()}
        width={props.width && props.width.toString()}
        style={{ opacity: 0 }}>
        {children}
      </svg>
    )
  return <motion.svg {...props}>{children}</motion.svg>
}
