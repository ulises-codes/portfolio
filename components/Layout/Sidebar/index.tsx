import styles from './styles.module.css'

import SocialIcons from 'components/SocialIcons'

export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      <div className="curved-line-vertical" />
      <div className={styles.socialIconsWrapper}>
        <div className={styles.socialIconsInner}>
          <SocialIcons />
        </div>
      </div>
      <div className="curved-line-vertical" />
    </div>
  )
}
