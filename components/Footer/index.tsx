import dynamic from 'next/dynamic'
import Head from 'next/head'

import styles from './styles.module.scss'

const SocialIcons = dynamic(() => import('components/SocialIcons'))

export default function Footer() {
  return (
    <footer>
      <Head key="footer-tags">
        <link
          rel="preload"
          href="https://use.typekit.net/llx7qor.css"
          as="font"
          crossOrigin="anonymous"
          onLoad={
            "this.onload=null;this.rel='stylesheet';this.as='style';this.type='text/css'" as any
          }
        />
      </Head>
      <div className={styles['footer-inner--div']}>
        <small className={styles['footer-inner--small']}>
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
        <div className={styles['footer-social-links--div']}>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}
