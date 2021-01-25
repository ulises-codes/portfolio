import { useState } from 'react'

import { MotionDiv } from 'components/MyMotion'
import Packages from 'components/Packages'
import Codepens from 'components/Codepens'
import Projects from 'components/Projects'

import Ellipse from 'util/Ellipse'

import styles from './styles.module.scss'

import { AnimatePresence } from 'framer-motion'

import Divider from 'util/houdini/Divider'
import Underline from 'util/houdini/Underline'

const projects = ['Packages', 'Codepens', 'Projects']

const TabContent = [Packages, Codepens, Projects]

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className={styles['portfolio-wrapper--div']}>
      <Underline>
        <h3 className="section-title--h2">Some Stuff I've Made</h3>
      </Underline>
      <div className={styles['portfolio-tabs-btns-wrapper--div']}>
        {projects.map((name, i) => (
          <div key={name} className={styles['portfolio-tabs-btn--div']}>
            <button
              className={styles['portfolio-tabs--btn']}
              onClick={() => setCurrentTab(i)}>
              {name}
            </button>
            <AnimatePresence initial={false}>
              {currentTab === i && <Ellipse />}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className={styles['portfolio-content-wrapper--div']}>
        <AnimatePresence key="portfolio-presence" exitBeforeEnter>
          {TabContent.map((Tab, i) =>
            currentTab === i ? (
              <MotionDiv
                key={projects[i]}
                initial={{
                  opacity: 0,
                  filter: 'grayscale(100%)',
                }}
                animate={{ opacity: 1, filter: 'grayscale(0)' }}
                exit={{
                  opacity: 0,
                  filter: 'grayscale(100%)',
                }}>
                <Tab />
              </MotionDiv>
            ) : null
          )}
        </AnimatePresence>
        <Divider />
      </div>
    </div>
  )
}
