import dynamic from 'next/dynamic'

const Portfolio = dynamic(() => import('components/Portfolio'))
const Bio = dynamic(() => import('components/Bio'))
const HomeTop = dynamic(() => import('components/HomeTop'))
const Skills = dynamic(() => import('components/Skills'))

const IndexPage = () => {
  return (
    <div className="page-root">
      <HomeTop />
      <Bio />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default IndexPage
