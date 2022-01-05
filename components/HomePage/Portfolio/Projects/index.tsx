import websitesList from './projectList'
import Thumbnail from './Thumbnail'

import styles from './styles.module.scss'

export default function Websites() {
  return (
    <div className={styles['projects-wrapper--div']}>
      {websitesList.map(project => (
        <Thumbnail {...project} key={project.name} />
      ))}
    </div>
  )
}
