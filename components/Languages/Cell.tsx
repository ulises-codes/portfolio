import { m as motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

type CellProps = {
  children: ReactNode
  index: number
  fill: string
}

const pathVariants: Variants = {
  initial: {
    pathLength: 0,
  },
  draw: index => ({
    pathLength: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.35,
    },
  }),
}

const SVGVariants: Variants = {
  initial: {
    fillOpacity: 0,
  },
  draw: index => ({
    fillOpacity: 1,
    transition: {
      delay: index * 0.2,
      duration: 0.75,
      type: 'tween',
    },
  }),
}

export default function Cell({ children, index, fill }: CellProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 -2 304.2 270.8"
      width="100"
      height="85"
      initial="initial"
      variants={SVGVariants}
      animate="draw"
      fill={fill}
      stroke="black"
      custom={index}
    >
      <motion.path
        strokeLinecap="round"
        stroke="#fff8e2"
        strokeWidth="4"
        d="M 225.6 0.5 H 75.6 L 0.6 130.4 L 75.6 260.3 H 225.6 L 300.6 130.4 Z"
        variants={pathVariants}
        initial="initial"
        animate="draw"
        custom={index}
      />
      {children}
    </motion.svg>
  )
}
