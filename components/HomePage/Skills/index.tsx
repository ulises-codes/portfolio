import { useState } from 'react'

import { MotionDiv } from 'util/MyMotion'
import Ellipse from 'util/Ellipse'
import dynamic from 'next/dynamic'

import { SECTIONS } from './skillLists'

import styles from './styles.module.scss'
import type { AnimatePresenceProps } from 'framer-motion'

const AnimatePresence = dynamic<AnimatePresenceProps>(() =>
  import('framer-motion').then(mod => mod.AnimatePresence)
)

const mapSkills = (arr: string[]) => (
  <ul className="ul">
    {arr.map(skill => (
      <li className="li">{skill}</li>
    ))}
  </ul>
)

export default function Skills() {
  const [currentView, setCurrentView] = useState(0)

  return (
    <div>
      <h3 className="subtitle">Skills</h3>
      <div className={styles.skillBtnsWrapper}>
        {SECTIONS.map(({ title }, i) => (
          <div key={`skill-btn-${title}`} className={styles.skillBtnDiv}>
            <button
              className={currentView === i ? 'active-tab' : 'button'}
              onClick={() => setCurrentView(i)}
            >
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
                <MotionDiv
                  layoutId="skills-section"
                  key={`skill-section-wrapper-${title}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {mapSkills(tags)}
                </MotionDiv>
              )
          )}
        </AnimatePresence>
      </div>
      <div className="checkerboard" />
    </div>
  )
}
