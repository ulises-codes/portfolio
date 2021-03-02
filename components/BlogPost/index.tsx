import hydrate from 'next-mdx-remote/hydrate'

import Image from 'next/image'
import Link from 'next/link'

import SEO from 'util/SEO'
import MyImage from 'util/MyImage'

import styles from './styles.module.scss'

import type { BlogPostProps } from 'interfaces/blog'
import type { HTMLAttributes } from 'react'
import SocialIcons from 'components/SocialIcons'

export default function BlogPost({ source, meta }: BlogPostProps) {
  const content = hydrate(source, {
    components: {
      img: MyImage,
      h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="subtitle" {...props} />
      ),
      a: (props: HTMLAttributes<HTMLAnchorElement>) => (
        <a
          {...props}
          className="link"
          rel="noreferrer onoopener nofollow"
          target="_blank"
        />
      ),
    },
  })

  const publishDate = new Date(meta.publishDate).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <SEO title={meta.title} />
      <article className={styles.blogPost}>
        <div className="blog-heading">
          <h1 className="title">{meta.title}</h1>
          <div className="single-line-divider" />

          <div className={[styles.meta, 'blog-meta'].join(' ')}>
            <Link href="/">
              <a rel="author" className={styles.author}>
                <Image
                  src="e_improve/v1613346960/ulises.codes/avatars/IMG_6191_ywrvt1.jpg"
                  width={30}
                  height={30}
                  objectFit="cover"
                  alt=""
                  role="presentation"
                  className={styles.avatar}
                />
                <span>{meta.author}</span>
              </a>
            </Link>
            <div className={styles.social}>
              <SocialIcons size={16} />
            </div>
            <time dateTime={publishDate}>{publishDate}</time>
          </div>
          <div className="single-line-divider" />
        </div>
        <div>
          <Image
            src={meta.headerImageSrc}
            width={960}
            height={480}
            alt={meta.headerImageAlt}
            objectFit="cover"
            priority={true}
          />
        </div>
        <div>{content}</div>
      </article>
    </>
  )
}
