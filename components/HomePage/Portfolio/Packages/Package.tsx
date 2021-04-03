import { PackageProps } from './packageList'

import styles from './styles.module.css'

export default function Package({
  description,
  languages,
  title,
  repo,
}: PackageProps) {
  return (
    <div className={[styles.packageWrapper, 'surface'].join(' ')}>
      <div className={styles.packageInner}>
        <h4>{title}</h4>
        <div className={styles.languageLogoBadges}>
          {languages.map(name => (
            <img
              key={name}
              src={`/images/language-logos/${name.toLocaleLowerCase()}.svg`}
              alt={`${name} logo`}
              className="language-logo-badge--img"
              width="24"
              height="24"
              loading="lazy"
            />
          ))}
        </div>
        <p className={styles.packageDescription}>{description}</p>
        <div className={styles.packageLink}>
          <a
            href={`https://github.com/ulises-codes/${repo}`}
            className={['link', styles.packageLink].join(' ')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Repo
          </a>
        </div>
      </div>
    </div>
  )
}
