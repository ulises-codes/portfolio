import { ProjectProps } from 'interfaces';
import styles from './styles.module.scss';
import MyImage from 'util/MyImage';

export default function Thumbnail({
  name,
  languages,
  imgSrc,
  url,
}: ProjectProps) {
  return (
    <div className={styles['thumbnail-root--div']}>
      <a href={`https://${url}`} target='_blank' rel='noopener noreferrer'>
        <span>{name}</span>
        <MyImage
          alt=''
          role='presentation'
          src={`f_auto/ulises.codes/project-thumbnails/${imgSrc}`}
          width='275'
          height='175'
          style={{ objectFit: 'contain' }}
        />
      </a>
      <div className={styles['thumbnail-details-languages--div']}>
        {languages.map((language) => (
          <img
            key={`${name}-language-badge-${language}`}
            className='language-logo-badge--img'
            src={`/images/language-logos/${language.toLocaleLowerCase()}.svg`}
            height='24'
            width='24'
            title={language}
          />
        ))}
      </div>
    </div>
  );
}
