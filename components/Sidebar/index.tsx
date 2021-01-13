import dynamic from 'next/dynamic'

const SocialIcons = dynamic(() => import('components/SocialIcons'))
const CurvedLine = dynamic(() => import('util/houdini/CurvedLineVert'), {
  ssr: false,
  loading: () => <div className="curved-line-vertical" />,
})

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper--div">
      <CurvedLine />
      <div className="social-icons-wrapper--div">
        <div className="social-icons-inner--div">
          <SocialIcons />
        </div>
      </div>
      <CurvedLine />
    </div>
  )
}
