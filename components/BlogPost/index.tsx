import type { BlogPostProps } from 'interfaces/blog'
import hydrate from 'next-mdx-remote/hydrate'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'

export default function BlogPost({ source, meta }: BlogPostProps) {
  const content = hydrate(source)

  return (
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
  )
}
