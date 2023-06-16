import { ProjectProps } from 'interfaces';

import styles from './styles.module.scss';
import MyImage from 'util/MyImage';
import { imgToBase64 } from 'lib/helper/imgToBase64';

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
          objectFit='cover'
          placeholder='blur'
          blurDataURL={
            imgToBase64(
              `${process.env.NEXT_PUBLIC_CLOUDINARY_PREFIX}/image/upload/c_scale,e_blur:102,w_300/ulises.codes/project-thumbnails/${imgSrc}`,
            ) as unknown as string
          }
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
