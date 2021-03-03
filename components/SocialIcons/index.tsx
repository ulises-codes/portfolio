import GithubLogo from 'public/images/social/github.svg'
import LinkedInLogo from 'public/images/social/linkedin.svg'
import EmailIcon from 'public/images/social/email.svg'
import TwitterIcon from 'public/images/social/twitter.svg'

import styles from './styles.module.scss'

export default function SocialIcons({ size = 24 }) {
  return (
    <>
      <a
        href="https://github.com/ulises-codes"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.socialIcon}
        aria-label="Click to visit my GitHub profile">
        <GithubLogo width={size} height={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/ulises-h/"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.socialIcon}
        aria-label="Click to visit my LinkedIn profile">
        <LinkedInLogo width={size} height={size} />
      </a>
      <a
        href="https://twitter.com/UlisesHimely"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.socialIcon}
        aria-label="Click to visit my Twitter profile">
        <TwitterIcon width={size} height={size} />
      </a>
      <a
        href="mailto:hi@ulises.codes"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.socialIcon}
        aria-label="Click to send me an email">
        <EmailIcon width={size} height={size} />
      </a>
    </>
  )
}
