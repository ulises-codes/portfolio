import MyImage from 'util/MyImage'
import featuredProject from 'lib/featuredProject'
import styles from './styles.module.scss'

export default function FeaturedProject() {
  return (
    <div>
      <h3 className="subtitle">Featured Project</h3>
      <div className={styles.titleWrapper}>
        <h4>
          <a className="link" href={featuredProject.url}>
            {featuredProject.name}
          </a>
        </h4>
        <div className={styles.spacer} />
        <div className={styles.languages}>
          {featuredProject.languages.map(l => (
            <img
              src={`/images/language-logos/${l.toLowerCase()}.svg`}
              height="30"
              width="30"
            />
          ))}
        </div>
      </div>
      <div className={styles.thumbnailWrapper}>
        <MyImage
          src={featuredProject.thumbnail.src}
          alt={featuredProject.thumbnail.alt}
          height={350}
          width={600}
          objectFit="contain"
          layout="intrinsic"
        />
      </div>
      <div className={styles.highlights}>
        <ul className="ul">
          {featuredProject.highlights.map(h => (
            <li className="li">{h}</li>
          ))}
        </ul>
      </div>
      <div className={styles.infoWrapper}>
        <p>{featuredProject.description}</p>
      </div>
      <div className="checkerboard" />
    </div>
  )
}
