import { useState } from 'react'
import dynamic from 'next/dynamic'

import Ellipse from '../../util/Ellipse'

import { MotionDiv } from 'components/MyMotion'

const AnimatePresence = dynamic<any>(() =>
  import('framer-motion').then(mod => mod.AnimatePresence)
)

const TLDR = dynamic(() => import('./TLDR'))
const More = dynamic(() => import('./More'))

const BIO_SECTIONS = [
  {
    title: 'TL;DR',
    component: TLDR,
  },
  {
    title: 'More',
    component: More,
  },
]

export default function HomeSection() {
  const [currentView, setCurrentView] = useState(0)

  return (
    <div className="home-page-section--div">
      <div className="bio-btns-wrapper--div">
        {BIO_SECTIONS.map((section, i) => (
          <div
            key={`bio-btn-${section.title}`}
            className="bio-btn-wrapper--div">
            <button className="bio-btn--btn" onClick={() => setCurrentView(i)}>
              {section.title}
            </button>
            <AnimatePresence>
              {currentView === i && <Ellipse view={currentView} />}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
        <MotionDiv className="bio-section-wrapper--div" layout>
          {BIO_SECTIONS.map(
            (section, i) =>
              currentView === i && (
                <MotionDiv
                  key={`bio-section--${section.title}`}
                  className="bio-section--div"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <section.component />
                </MotionDiv>
              )
          )}
          <div className="checkerboard-divider--div" />
        </MotionDiv>
      </AnimatePresence>
    </div>
  )
}
