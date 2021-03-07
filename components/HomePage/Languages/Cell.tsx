import { m as motion } from 'framer-motion'
import styles from './styles.module.css'

import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'

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
      delay: index * 0.05,
      duration: 0.1,
    },
  }),
}

export default function Cell({ children, index, fill }: CellProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-4 -2 304.2 270.8"
      width="100"
      height="85"
      fill={fill}
      stroke="black">
      <motion.path
        strokeLinecap="round"
        className={styles.hexPath}
        strokeWidth="4"
        d="M 225.6 0.5 H 75.6 L 0.6 130.4 L 75.6 260.3 H 225.6 L 300.6 130.4 Z"
        variants={pathVariants}
        initial="initial"
        animate="draw"
        custom={index}
      />
      {children}
    </svg>
  )
}
