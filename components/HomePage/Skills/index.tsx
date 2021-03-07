import { useState } from 'react'

import { m as motion, AnimatePresence } from 'framer-motion'
import Ellipse from 'util/Ellipse'

import { SECTIONS } from './skillLists'

import styles from './styles.module.scss'

const mapSkills = (arr: string[]) => (
  <ul className={styles['skills-list--ul']}>
    {arr.map(skill => (
      <li className={styles['list-item']} key={skill}>
        {skill}
      </li>
    ))}
  </ul>
)

export default function Skills() {
  const [currentView, setCurrentView] = useState(0)

  return (
    <div>
      <h3 className="subtitle">Skills</h3>
      <div className={styles['skill-btns-wrapper--div']}>
        {SECTIONS.map(({ title }, i) => (
          <div key={`skill-btn-${title}`} className={styles['skill-btn--div']}>
            <button
              className={currentView === i ? 'active-tab' : 'button'}
              onClick={() => setCurrentView(i)}>
              {title}
            </button>
            <AnimatePresence initial={false} key="skills-ellipse">
              {currentView === i && <Ellipse key={`skills-ellipse-${title}`} />}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div>
        <AnimatePresence initial={false} key="skill-section" exitBeforeEnter>
          {SECTIONS.map(
            ({ tags, title }, i) =>
              currentView === i && (
                <motion.div
                  layoutId="skills-section"
                  key={`skill-section-wrapper-${title}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  {mapSkills(tags)}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="checkerboard" />
    </div>
  )
}
