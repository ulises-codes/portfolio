import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hydrate from 'next-mdx-remote/hydrate'

import SEO from 'util/SEO'
import { ThemeContext } from 'components/Layout'

import type { BlogPostProps } from 'interfaces/blog'

import styles from './styles.module.scss'

export default function BlogPost({ source, meta }: BlogPostProps) {
  const { currentTheme } = useContext(ThemeContext)
  const content = hydrate(source)

  return (
    <>
      <SEO title={meta.title}>
        {currentTheme?.titleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.titleFont}&display=block&text=${meta.title}`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
        {currentTheme?.subtitleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.subtitleFont}&display=swap`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
      </SEO>
      <div className={styles.blogPost}>
        <div className="blog-heading">
          <h1>{meta.title}</h1>
          <hr />
          <div className={[styles.meta, 'blog-meta'].join(' ')}>
            <Link href="/">
              <a
                rel="author"
                className={['not-hyperlink', styles.author].join(' ')}>
                <Image
                  src="e_improve/v1613346960/ulises.codes/avatars/IMG_6191_ywrvt1.jpg"
                  width={30}
                  height={30}
                  objectFit="cover"
                  className={styles.avatar}
                />
                <span>{meta.author}</span>
              </a>
            </Link>
            <span>
              {new Date(meta.publishDate).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>
          <hr />
        </div>

        <div>{content}</div>
      </div>
    </>
  )
}
