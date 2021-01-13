import languageMap from 'components/Languages/languageMap'
import { PackageProps } from './packageList'

export default function Package({
  description,
  languages,
  title,
  repo,
}: PackageProps) {
  return (
    <div className="package-wrapper--div">
      <div className="package-inner--div">
        <h4>{title}</h4>
        <div className="language-logo-badges--div">
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
        <p className="package-description--p">{description}</p>
        <div className="package-link--div">
          <a
            href={`https://github.com/ulises-codes/${repo}`}
            className="hyperlink package-link--a"
            target="_blank"
            rel="noopener noreferrer">
            Go to Repo
          </a>
        </div>
      </div>
    </div>
  )
}
