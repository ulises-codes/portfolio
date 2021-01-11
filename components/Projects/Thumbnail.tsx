import Image from 'next/image'
import { m as motion, useAnimation } from 'framer-motion'
import { ProjectProps } from './projectList'
import languageMap from 'components/Languages/languageMap'

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
      filter: 'blur(5px) grayscale(90%) brightness(0.65)',
    },
  }

  return (
    <motion.div
      className="thumbnail-root--div"
      animate={controls}
      whileHover="hover">
      <motion.div
        className="thumbnail-details--div"
        initial="hidden"
        variants={detailsVariants}>
        <a
          className="hyperlink"
          href={`https://${url}`}
          target="_blank"
          rel="noopener noreferrer">
          {name}
        </a>
        <div className="thumbnail-details-languages--div">
          {languageMap
            .filter(({ name }) => languages.includes(name))
            .map(language => (
              <img
                key={`${name}-language-badge-${language.name}`}
                className="language-logo-badge--img"
                src={`/images/language-logos/${language.filename}.svg`}
              />
            ))}
        </div>
        {description && (
          <span className="thumbnail-description--span">{description}</span>
        )}
      </motion.div>
      <motion.div
        className="thumbnail-image-wrapper--div"
        initial="initial"
        variants={imgVariants}>
        <Image
          src={`ulises.codes/project-thumbnails/${imgSrc}`}
          width="275"
          height="178"
          objectFit="contain"
        />
      </motion.div>
    </motion.div>
  )
}
