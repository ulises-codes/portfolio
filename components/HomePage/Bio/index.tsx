import { useState } from 'react'
import dynamic from 'next/dynamic'

import Ellipse from 'util/Ellipse'
import { MotionDiv } from 'util/MyMotion'

import TLDR from './TLDR'
import More from './More'
import type { AnimatePresenceProps } from 'framer-motion'

import styles from './styles.module.css'

const AnimatePresence = dynamic<AnimatePresenceProps>(() =>
  import('framer-motion').then(mod => mod.AnimatePresence)
)

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
    <div className={styles['bio-section--div']}>
      <h3 className="subtitle">Some Info About Me</h3>
      <div className={styles['bio-btns-wrapper--div']}>
        {BIO_SECTIONS.map((section, i) => (
          <div
            key={`bio-btn-${section.title}`}
            className={styles['bio-btn-wrapper--div']}
          >
            <button
              className={currentView === i ? 'active-tab' : 'button'}
              onClick={() => setCurrentView(i)}
            >
              {section.title}
            </button>
            <AnimatePresence initial={false} key="bio-ellipse">
              {currentView === i && <Ellipse />}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <AnimatePresence initial={false} exitBeforeEnter>
        <MotionDiv className={styles['bio-section-wrapper--div']} layout>
          {BIO_SECTIONS.map(
            (section, i) =>
              currentView === i && (
                <MotionDiv
                  key={`bio-section--${section.title}`}
                  className={styles['bio-section--div']}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <section.component />
                </MotionDiv>
              )
          )}
          <div className="checkerboard" />
        </MotionDiv>
      </AnimatePresence>
    </div>
  )
}
