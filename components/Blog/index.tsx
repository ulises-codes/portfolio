import type { BlogPostInfo } from 'interfaces/blog'
import { ThemeContext } from 'components/Layout'

import Link from 'next/link'
import { useContext } from 'react'
import styles from './styles.module.css'
import SEO from 'util/SEO'

export default function Blog({
  posts,
  dedupedTitles,
}: {
  posts: BlogPostInfo[]
  dedupedTitles: string
}) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <>
      <SEO title="Blog">
        {currentTheme?.subtitleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.subtitleFont}&display=block&text=${dedupedTitles}`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
      </SEO>
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
