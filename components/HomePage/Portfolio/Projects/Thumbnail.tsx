import { useAnimation } from 'framer-motion'

import { MotionDiv } from 'util/MyMotion'

import { ProjectProps } from './projectList'

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
    <MotionDiv
      className={styles['thumbnail-root--div']}
      animate={controls}
      whileHover="hover"
    >
      <MotionDiv
        className={styles['thumbnail-details--div']}
        initial="hidden"
        variants={detailsVariants}
      >
        <a
          className="link"
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <div className={styles['thumbnail-details-languages--div']}>
          {languages.map(language => (
            <img
              key={`${name}-language-badge-${language}`}
              className="language-logo-badge--img"
              src={`/images/language-logos/${language.toLocaleLowerCase()}.svg`}
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
      </MotionDiv>
      <MotionDiv
        className={styles['thumbnail-image-wrapper--div']}
        initial="initial"
        transition={{ type: 'tween' }}
        variants={imgVariants}
      >
        <MyImage
          src={`ulises.codes/project-thumbnails/${imgSrc}`}
          width="275"
          height="178"
        />
      </MotionDiv>
    </MotionDiv>
  )
}
