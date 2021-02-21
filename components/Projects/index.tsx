import projectList from './projectList'
import Thumbnail from './Thumbnail'

import styles from './styles.module.css'

export default function Projects() {
  return (
    <div className={styles['projects-wrapper--div']}>
      {projectList.map(project => (
        <Thumbnail {...project} key={project.name} />
      ))}
    </div>
  )
}
