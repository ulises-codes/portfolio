import { m as motion, useAnimation } from 'framer-motion'

import { ProjectProps } from './projectList'
import languageMap from 'components/HomePage/Languages/languageMap'

import styles from './styles.module.css'
import MyImage from 'util/MyImage'

export default function Thumbnail({
  name,
  description,
  languages,
  imgSrc,
  url,
}: ProjectProps) {
  const controls = useAnimation()

  const detailsVariants = {
    hidden: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  }

  const imgVariants = {
    initial: {
      filter: 'blur(0px) grayscale(0%) brightness(1)',
    },
    hover: {
      filter: 'blur(5px)  grayscale(90%) brightness(0.65)',
    },
  }

  return (
    <motion.div
      className={styles['thumbnail-root--div']}
      animate={controls}
      whileHover="hover">
      <motion.div
        className={styles['thumbnail-details--div']}
        initial="hidden"
        variants={detailsVariants}>
        <a
          className="link"
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer">
          {name}
        </a>
        <div className={styles['thumbnail-details-languages--div']}>
          {languageMap
            .filter(({ name }) => languages.includes(name))
            .map(language => (
              <img
                key={`${name}-language-badge-${language.name}`}
                className="language-logo-badge--img"
                src={`/images/language-logos/${language.filename}.svg`}
                height="24"
                width="24"
              />
            ))}
        </div>
        {description && (
          <span className={styles['thumbnail-description--span']}>
            {description}
          </span>
        )}
      </motion.div>
      <motion.div
        className={styles['thumbnail-image-wrapper--div']}
        initial="initial"
        transition={{ type: 'tween' }}
        variants={imgVariants}>
        <MyImage
          src={`ulises.codes/project-thumbnails/${imgSrc}`}
          width="275"
          height="178"
        />
      </motion.div>
    </motion.div>
  )
}
