import type { BlogPostInfo } from 'interfaces/blog'
import { imgToBase64 } from 'lib/helper/imgToBase64'

import Link from 'next/link'
import MyImage from 'util/MyImage'
import styles from './styles.module.css'

export default function PostCard({ slug, meta }: BlogPostInfo) {
  return (
    <article key={slug} className={[styles.post, 'surface'].join(' ')}>
      <div className={styles.inner}>
        <div className={styles.titleWrapper}>
          <Link href={`/blog/${slug}`}>
            <a>
              <h2 className={['on-surface', styles.title].join(' ')}>
                {meta.title}
              </h2>
            </a>
          </Link>
          <time dateTime={new Date(meta.publishDate).toDateString()}>
            {new Date(meta.publishDate).toLocaleDateString(undefined, {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </time>
        </div>
        <hr className={styles.hr} />
        <MyImage
          src={meta.headerImageSrc}
          width={650}
          height={267.19}
          alt={meta.headerImageAlt}
          placeholder="blur"
          blurDataURL={
            imgToBase64(
              `${process.env.NEXT_PUBLIC_CLOUDINARY_PREFIX}e_blur:800,f_auto,w_200/${meta.headerImageSrc}`
            ) as unknown as string
          }
        />
        <hr className={styles.hr} />
        <div className={styles.excerpt}>{meta.excerpt}</div>
      </div>
    </article>
  )
}
