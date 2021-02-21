import dynamic from 'next/dynamic'

import { useContext, useEffect, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'

import SEO from 'components/SEO'

import Head from 'next/head'
import { ThemeContext } from 'components/Layout'

const Portfolio = dynamic(() => import('components/Portfolio'))
const Bio = dynamic(() => import('components/Bio'))
const HomeTop = dynamic(() => import('components/HomeTop'))
const Skills = dynamic(() => import('components/Skills'))

function IndexSections() {
  const [visibleSections, setVisibleSections] = useState<string[]>([])

  const bioRef = useRef() as MutableRefObject<HTMLDivElement>
  const skillsRef = useRef() as MutableRefObject<HTMLDivElement>
  const portfolioRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const refs: { [key: string]: MutableRefObject<HTMLDivElement> } = {
      Bio: bioRef,
      Skills: skillsRef,
      Portfolio: portfolioRef,
    }

    const observer = new IntersectionObserver(
      (elements, ob) => {
        for (let el of elements) {
          if (el.isIntersecting && !visibleSections.includes(el.target.id)) {
            setVisibleSections([...visibleSections, el.target.id])

            ob.unobserve(el.target)
          }
        }
      },
      {
        root: undefined,
      }
    )

    for (let ref in refs) {
      if (!visibleSections.includes(ref)) {
        observer.observe(refs[ref].current)
      }
    }

    return () => observer.disconnect()
  }, [visibleSections])

  return (
    <div className="page-root">
      <HomeTop />
      <div id="Bio" style={{ minHeight: '300px' }} ref={bioRef}>
        {visibleSections.includes('Bio') && <Bio />}
      </div>
      <div id="Skills" style={{ minHeight: '300px' }} ref={skillsRef}>
        {visibleSections.includes('Skills') && <Skills />}
      </div>
      <div id="Portfolio" style={{ minHeight: '300px' }} ref={portfolioRef}>
        {visibleSections.includes('Portfolio') && <Portfolio />}
      </div>
    </div>
  )
}

export default function IndexPage() {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <>
      <Head key="home-tags">
        {/* <SEO /> */}
        {currentTheme?.titleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.titleFont}&display=block&text=Greetings.IamUlises.`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
        {currentTheme?.subtitleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.subtitleFont}&display=swap&text=Imawebdlvopr.S'cnfkisuthTL;DRMFBCPgj`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
      </Head>
      <IndexSections />
    </>
  )
}
