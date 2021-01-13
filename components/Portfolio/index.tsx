import { useState } from 'react'
import dynamic from 'next/dynamic'

import { MotionDiv } from 'components/MyMotion'
import Packages from 'components/Packages'

import Ellipse from 'util/Ellipse'
import Projects from 'components/Projects'

const Codepens = dynamic(() => import('components/Codepens'))
const AnimatePresence = dynamic<any>(() =>
  import('framer-motion').then(mod => mod.AnimatePresence)
)

const projects = ['Packages', 'Codepens', 'Projects']

const TabContent = [Packages, Codepens, Projects]

export default function ProjectTabs() {
  const [currentTab, setCurrentTab] = useState(0)

  return (
    <div className="portfolio-wrapper--div">
      <div className="portfolio-tabs-btns-wrapper--div">
        {projects.map((name, i) => (
          <div key={name} className="portfolio-tabs-btn--div">
            <button
              className="portfolio-tabs--btn"
              onClick={() => setCurrentTab(i)}>
              {name}
            </button>
            <AnimatePresence>
              {currentTab === i && <Ellipse view={currentTab} />}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="portfolio-content-wrapper--div">
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
        <div className="checkerboard-divider--div" />
      </div>
    </div>
  )
}
