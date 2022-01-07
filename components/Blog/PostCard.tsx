import type { BlogPostInfo } from 'interfaces/blog'

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
          quality={50}
          alt={meta.headerImageAlt}
        />
        <hr className={styles.hr} />
        <div className={styles.excerpt}>{meta.excerpt}</div>
      </div>
    </article>
  )
}
