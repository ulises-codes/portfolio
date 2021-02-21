import { useState } from 'react'

import { MotionDiv } from 'util/MyMotion'
import Packages from './Packages'
import Codepens from './Codepens'
import Projects from './Projects'

import Ellipse from 'util/Ellipse'

import styles from './styles.module.css'

import { AnimatePresence } from 'framer-motion'

import Underline from 'util/houdini/Underline'

const projects = ['Packages', 'Codepens', 'Projects']

const TabContent = [Packages, Codepens, Projects]

export default function Portfolio() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className={styles['portfolio-wrapper--div']}>
      <Underline>
        <h3 className="subtitle">Some Stuff I've Made</h3>
      </Underline>
      <div className={styles['portfolio-tabs-btns-wrapper--div']}>
        {projects.map((name, i) => (
          <div key={name} className={styles['portfolio-tabs-btn--div']}>
            <button
              className={currentTab === i ? 'active-tab' : 'button'}
              onClick={() => setCurrentTab(i)}>
              {name}
            </button>
            <AnimatePresence initial={false} key="portfolio-ellipse">
              {currentTab === i && <Ellipse />}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className={styles['portfolio-content-wrapper--div']}>
        <AnimatePresence
          key="portfolio-presence"
          initial={false}
          exitBeforeEnter>
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
      </div>
    </div>
  )
}
