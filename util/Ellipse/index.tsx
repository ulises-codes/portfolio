import { MotionPath } from 'util/MyMotion'
import styles from './styles.module.css'

export default function Ellipse() {
  return (
    <svg className={styles.btnOutline} viewBox="0 -9 1272 796.9">
      <MotionPath
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        exit={{ pathLength: 0 }}
        transition={{ duration: 0.25 }}
        fill="none"
        strokeMiterlimit="10"
        d="M56.3,337c41.4-61.5,124.3-164.7,264.5-235.7
	c49.8-25.2,233.1-118.1,448-57.6c53.5,15.1,170.9,49.9,256.2,162.8c22.6,29.9,99.4,131.5,83.9,252.8
	c-23,180-241.8,314.8-426.5,312.5C462.1,769.1,248.2,570.2,200.9,283"
      />
    </svg>
  )
}
