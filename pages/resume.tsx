const FRONTEND_SKILLS = ['JavaScript', 'HTML', 'CSS', 'React', 'Typescript']
const BACKEND_SKILLS = ['Node', 'GraphQL', 'MongoDB', 'Firebase']
const CREATIVE_SKILLS = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'CSS Paint Worklets',
]
const FRAMEWORKS = ['Next JS', 'GatsbyJS']

import styles from 'styles/resume.module.css'

const mapSkills = (arr: string[]) => (
  <ul>
    {arr.map(skill => (
      <li className={styles['list-item']} key={skill}>
        {skill}
      </li>
    ))}
  </ul>
)

export default function Resume() {
  return (
    <div className="page-root">
      <hgroup>
        <h1>
          <span>ULISES HIMELY</span>
        </h1>
        <h2>Web developer and avid human being.</h2>
      </hgroup>
      <h3>Technical Skills</h3>
      <div>
        <h4>Frontend</h4>
        <ul>{mapSkills(FRONTEND_SKILLS)}</ul>
      </div>
      <div>
        <h4>Backend</h4>
        <ul>{mapSkills(BACKEND_SKILLS)}</ul>
      </div>
      <div>
        <h4>Design</h4>
        <ul>{mapSkills(CREATIVE_SKILLS)}</ul>
      </div>
      <h4>Frameworks</h4>
      <h4>Miscellaneous</h4>
      <h3>Professional Skills</h3>
      <h3>Work Experience</h3>
    </div>
  )
}
