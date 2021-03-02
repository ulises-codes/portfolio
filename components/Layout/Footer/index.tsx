import dynamic from 'next/dynamic'

import { useEffect, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'
import styles from './styles.module.css'

const SocialIcons = dynamic(() => import('components/SocialIcons'))

function FooterContent() {
  return (
    <footer className={styles.footer}>
      <hr />
      <small>
        <span>Designed and Coded by Ulises Himely.</span>{' '}
        <a
          href="https://github.com/ulises-codes/portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="link">
          Go to Repo
        </a>
      </small>
      <div className={styles.social}>
        <hr />
        <div className={styles.socialIcons}>
          <SocialIcons size={16} />
        </div>
      </div>
      <hr />
      <small>
        The soundtrack to Bite Me is a polyphonic version of{' '}
        <cite>
          <a
            href="https://music.apple.com/us/album/eco-echo/1450301682?i=1450301683"
            className="link"
            target="_blank"
            rel="noreferrer noopener">
            Echo by Elevation Worship
          </a>
        </cite>{' '}
        created in Ableton Live by me.
      </small>
    </footer>
  )
}

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false)

  const footerRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, ob) => {
        for (let entry of entries) {
          if (
            entry.target.id === styles.Footer &&
            entry.isIntersecting &&
            !showFooter
          ) {
            setShowFooter(true)
            ob.unobserve(entry.target)
          }
        }
      },
      {
        root: undefined,
      }
    )

    if (!showFooter) observer.observe(footerRef.current)

    return () => observer.disconnect()
  }, [showFooter])

  return (
    <>
      <div className={styles.footerAdjust} />
      <div id={styles.Footer} ref={footerRef}>
        {showFooter && <FooterContent />}
      </div>
    </>
  )
}
