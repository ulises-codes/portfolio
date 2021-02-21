import dynamic from 'next/dynamic'

const HomePageSections = dynamic(() => import('components/HomePage'))

export default function IndexPage() {
  return <HomePageSections />
}
