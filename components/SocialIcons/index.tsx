import GithubLogo from 'public/images/social/github.svg'
import LinkedInLogo from 'public/images/social/linkedin.svg'
import EmailIcon from 'public/images/social/email.svg'
import TwitterIcon from 'public/images/social/twitter.svg'

import styles from './styles.module.scss'

export default function SocialIcons() {
  return (
    <>
      <a
        href="https://github.com/ulises-codes"
        target="_blank"
        rel="noreferrer noopener"
        className={[styles.socialIcon, 'not-hyperlink'].join(' ')}
        aria-label="Click to visit my GitHub profile">
        <GithubLogo width="24" height="24" />
      </a>
      <a
        href="https://www.linkedin.com/in/ulises-h-9abb00124/"
        target="_blank"
        rel="noreferrer noopener"
        className={[styles.socialIcon, 'not-hyperlink'].join(' ')}
        aria-label="Click to visit my LinkedIn profile">
        <LinkedInLogo width="24" height="24" />
      </a>
      <a
        href="https://twitter.com/UlisesHimely"
        target="_blank"
        rel="noreferrer noopener"
        className={[styles.socialIcon, 'not-hyperlink'].join(' ')}
        aria-label="Click to visit my Twitter profile">
        <TwitterIcon width="24" height="24" />
      </a>
      <a
        href="mailto:hi@ulises.codes"
        target="_blank"
        rel="noreferrer noopener"
        className={[styles.socialIcon, 'not-hyperlink'].join(' ')}
        aria-label="Click to send me an email">
        <EmailIcon width="24" height="24" />
      </a>
    </>
  )
}
