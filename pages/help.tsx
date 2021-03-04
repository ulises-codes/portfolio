import HelpPage from 'components/HelpPage'
import dynamic from 'next/dynamic'

// const HelpPage = dynamic(() => import('components/HelpPage'))

export default function Help() {
  return <HelpPage />
}
