import projectList from './projectList'
import Thumbnail from './Thumbnail'

export default function Projects() {
  return (
    <div className="projects-wrapper--div">
      {projectList.map(project => (
        <Thumbnail {...project} key={project.name} />
      ))}
    </div>
  )
}
