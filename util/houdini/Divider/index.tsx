import styles from './styles.module.css'

export default function Divider({ height = 62 }) {
  return (
    <div
      className={[styles.checkerboardDivider, 'checkerboard'].join(' ')}
      style={{ height: `${height}px` }}
    />
  )
}
