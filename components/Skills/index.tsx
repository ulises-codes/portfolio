import { useState } from 'react'

import { MotionDiv } from 'components/MyMotion'
import Ellipse from 'util/Ellipse'
import dynamic from 'next/dynamic'

import { SECTIONS } from './skillLists'

import styles from './styles.module.scss'
import type { AnimatePresenceProps } from 'framer-motion'

const Divider = dynamic(() => import('util/houdini/Divider'), {
  ssr: false,
  loading: () => <div className="divider-placeholder--div" />,
})

const Underline = dynamic(() => import('util/houdini/Underline'), {
  ssr: false,
  loading: () => <h3 className="section-title--h2">Some Stuff I've Made</h3>,
})

const AnimatePresence = dynamic<AnimatePresenceProps>(() =>
  import('framer-motion').then(mod => mod.AnimatePresence)
)

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
      <Underline>
        <h3>Skills</h3>
      </Underline>
      <div className={styles['skill-btns-wrapper--div']}>
        {SECTIONS.map(({ title }, i) => (
          <div key={`skill-btn-${title}`} className={styles['skill-btn--div']}>
            <button onClick={() => setCurrentView(i)}>{title}</button>
            <AnimatePresence initial={false}>
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
                  exit={{ opacity: 0 }}>
                  {mapSkills(tags)}
                </MotionDiv>
              )
          )}
        </AnimatePresence>
      </div>
      <Divider />
    </div>
  )
}
