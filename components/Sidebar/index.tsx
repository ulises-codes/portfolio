import dynamic from 'next/dynamic'

import styles from './styles.module.css'

const SocialIcons = dynamic(() => import('components/SocialIcons'))
const CurvedLine = dynamic(() => import('util/houdini/CurvedLineVert'), {
  ssr: false,
  loading: () => <div className="curved-line-vertical" />,
})

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
