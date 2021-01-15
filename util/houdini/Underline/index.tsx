import type { ReactNode } from 'react'

import styles from './styles.module.scss'

export default function Underline({ children }: { children: ReactNode }) {
  return <div className={styles['underline--div']}>{children}</div>
}
