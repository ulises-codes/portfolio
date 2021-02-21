import styles from './styles.module.css'

import SocialIcons from 'components/SocialIcons'

import CurvedLine from 'util/houdini/CurvedLineVert'

export default function Sidebar() {
  return (
    <div className={styles['sidebar-wrapper--div']}>
      <CurvedLine />
      <div className={styles['social-icons-wrapper--div']}>
        <div className={styles['social-icons-inner--div']}>
          <SocialIcons />
        </div>
      </div>
      <CurvedLine />
    </div>
  )
}
