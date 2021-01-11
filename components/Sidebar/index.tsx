import GithubLogo from 'public/images/icons/github-pixelated.svg'
import LinkedInLogo from 'public/images/icons/linkedin-pixelated.svg'
import EmailIcon from 'public/images/icons/email-pixelated.svg'

export default function Sidebar() {
  return (
    <div className="sidebar-wrapper--div">
      <div className="curved-line-vertical" />
      <div className="social-icons-wrapper--div">
        <div className="social-icons-inner--div">
          <a
            href="https://github.com/ulises-codes"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon--a">
            <GithubLogo width="24" height="24" />
          </a>
          <a
            href="https://www.linkedin.com/in/ulises-h-9abb00124/"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon--a">
            <LinkedInLogo width="24" height="24" />
          </a>
          <a
            href="mailto:hi@ulises.codes"
            target="_blank"
            rel="noreferrer noopener"
            className="social-icon--a">
            <EmailIcon width="24" height="24" />
          </a>
        </div>
      </div>
      <div className="curved-line-vertical" />
    </div>
  )
}
