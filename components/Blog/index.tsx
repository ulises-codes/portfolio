import type { BlogPostInfo } from 'interfaces/blog'

import Link from 'next/link'
import styles from './styles.module.css'
import SEO from 'util/SEO'

export default function Blog({
  posts,
}: {
  posts: BlogPostInfo[]
  dedupedTitles: string
}) {
  return (
    <>
      <SEO title="Blog" />
      <div>
        {posts.map(({ slug, data }) => (
          <div key={slug} className={[styles.post, 'blog-listing'].join(' ')}>
            <div className={styles.inner}>
              <div className={styles.date}>
                <span className={styles.monthDate}>
                  {new Date(data.publishDate).toLocaleDateString(undefined, {
                    day: 'numeric',
                    month: 'short',
                  })}
                </span>
                <span className={styles.year}>
                  {new Date(data.publishDate).toLocaleDateString(undefined, {
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className={styles.titleWrapper}>
                <Link href={`/blog/${slug}`}>
                  <a className="not-hyperlink">
                    <h2 className={styles.title}>{data.title}</h2>
                  </a>
                </Link>
                <hr className={styles.hr} />
                <span>{data.excerpt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
