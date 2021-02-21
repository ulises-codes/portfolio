import languageMap from 'components/HomePage/Languages/languageMap'

import { PackageProps } from './packageList'

import styles from './styles.module.css'

import AngledCorners from 'util/houdini/AngledCorners'

export default function Package({
  description,
  languages,
  title,
  repo,
}: PackageProps) {
  return (
    <AngledCorners
      className={[styles.packageWrapper, 'package-wrapper'].join(' ')}>
      <div className={styles['package-inner--div']}>
        <h4>{title}</h4>
        <div className={styles['language-logo-badges--div']}>
          {languageMap
            .filter(({ name }) => languages.includes(name))
            .map(({ filename, name }) => (
              <img
                key={name}
                src={`/images/language-logos/${filename}.svg`}
                alt={`${name} logo`}
                className="language-logo-badge--img"
                width="24"
                height="24"
                loading="lazy"
              />
            ))}
        </div>
        <p className={styles['package-description--p']}>{description}</p>
        <div className={styles['package-link--div']}>
          <a
            href={`https://github.com/ulises-codes/${repo}`}
            className={['hyperlink', styles['package-link--a']].join(' ')}
            target="_blank"
            rel="noopener noreferrer">
            Go to Repo
          </a>
        </div>
      </div>
    </AngledCorners>
  )
}
