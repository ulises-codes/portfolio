import dynamic from 'next/dynamic'

import { useEffect, useRef, useState } from 'react'

import SEO from 'util/SEO'

import type { MutableRefObject } from 'react'

const Portfolio = dynamic(() => import('components/HomePage/Portfolio'))
const Bio = dynamic(() => import('components/HomePage/Bio'))
const HomeTop = dynamic(() => import('components/HomePage/HomeTop'))
const Skills = dynamic(() => import('components/HomePage/Skills'))

export default function HomePage() {
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
    <>
      <SEO />
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
    </>
  )
}
