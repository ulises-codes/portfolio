import dynamic from 'next/dynamic'

const SocialIcons = dynamic(() => import('components/SocialIcons'))

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper--div">
      <div className="curved-line-vertical" />
      <div className="social-icons-wrapper--div">
        <div className="social-icons-inner--div">
          <SocialIcons />
        </div>
      </div>
      <div className="curved-line-vertical" />
    </div>
  )
}
