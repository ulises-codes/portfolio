import dynamic from 'next/dynamic'

const SocialIcons = dynamic(() => import('components/SocialIcons'))

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner--div">
        <small className="footer-inner--small">
          <span>Designed and Coded by Ulises Himely.</span>
          <a
            className="hyperlink"
            href="https://github.com/ulises-codes/portfolio"
            target="_blank"
            rel="noreferrer noopener">
            Go to Repo
          </a>
        </small>
        <small>
          The soundtrack to Bite Me is a polyphonic version of{' '}
          <cite>
            <a
              className="hyperlink"
              href="https://music.apple.com/us/album/eco-echo/1450301682?i=1450301683"
              target="_blank"
              rel="noreferrer noopener">
              Echo by Elevation Worship
            </a>
          </cite>{' '}
          created in Ableton Live by me.
        </small>
        <div className="footer-social-links--div">
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
