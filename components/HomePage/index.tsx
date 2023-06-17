import dynamic from 'next/dynamic';

import { useEffect, useRef, useState } from 'react';

import SEO from 'util/SEO';

import type { MutableRefObject } from 'react';

const HomeTop = dynamic(() => import('components/HomePage/HomeTop'));
const Featured = dynamic(() => import('components/HomePage/FeaturedProject'));
const Bio = dynamic(() => import('components/HomePage/Bio'));
const Portfolio = dynamic(() => import('components/HomePage/Portfolio'));

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  const bioRef = useRef() as MutableRefObject<HTMLDivElement>;
  const skillsRef = useRef() as MutableRefObject<HTMLDivElement>;
  const portfolioRef = useRef() as MutableRefObject<HTMLDivElement>;
  const featuredRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const refs: { [key: string]: MutableRefObject<HTMLDivElement> } = {
      Bio: bioRef,
      Skills: skillsRef,
      Portfolio: portfolioRef,
      Featured: featuredRef,
    };

    const observer = new IntersectionObserver(
      (elements, ob) => {
        for (let el of elements) {
          if (el.isIntersecting && !visibleSections.includes(el.target.id)) {
            setVisibleSections([...visibleSections, el.target.id]);

            ob.unobserve(el.target);
          }
        }
      },
      {
        root: undefined,
      },
    );

    for (let ref in refs) {
      if (!visibleSections.includes(ref)) {
        observer.observe(refs[ref].current);
      }
    }

    return () => observer.disconnect();
  }, [visibleSections]);

  return (
    <>
      <SEO />
      <div className='page-root'>
        <HomeTop />
        <section id='Featured' style={{ minHeight: '300px' }} ref={featuredRef}>
          {visibleSections.includes('Featured') && <Featured />}
        </section>
        <section id='Bio' style={{ minHeight: '300px' }} ref={bioRef}>
          {visibleSections.includes('Bio') && <Bio />}
        </section>
        <section
          id='Portfolio'
          style={{ minHeight: '300px' }}
          ref={portfolioRef}
        >
          {visibleSections.includes('Portfolio') && <Portfolio />}
        </section>
      </div>
    </>
  );
}
