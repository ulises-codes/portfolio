import { useContext } from 'react'
import { LatestPostContext } from '../../../pages/index'
import MyImage from 'util/MyImage'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function LatestPost() {
  const latestPost = useContext(LatestPostContext)

  return (
    <article className={[styles.root, 'surface'].join(' ')}>
      <Link href={`/blog/${latestPost?.slug}`}>
        <a>
          <div className={styles.inner}>
            <div className={styles.top}>
              <div className={styles.title}>
                <h2>Latest Blog Post</h2>
                <span>•</span>
                <time dateTime={latestPost?.meta.publishDate}>
                  {new Date(
                    latestPost?.meta.publishDate as string
                  ).toLocaleDateString(undefined, {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  })}
                </time>
              </div>
              <h3>{latestPost?.meta.title}</h3>
            </div>
            <MyImage
              src={latestPost?.meta.headerImageSrc}
              alt={latestPost?.meta.headerImageAlt}
              width={350}
              height={175}
              placeholder="blur"
              blurDataURL={latestPost?.postPlaceholderImg}
            />
            <div className={styles.bottom}>
              <p>{latestPost?.meta.excerpt}</p>
            </div>
          </div>
        </a>
      </Link>
    </article>
  )
}
