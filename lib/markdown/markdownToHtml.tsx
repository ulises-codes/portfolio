import highlighterPlugin from 'rehype-highlight'

import renderToString from 'next-mdx-remote/render-to-string'
import MyImage from 'util/MyImage'

import styles from 'components/BlogPost/styles.module.scss'

import type { MyImageProps } from 'util/MyImage'
import type { HTMLAttributes } from 'react'
import AnchorLink from 'util/AnchorLink'

export async function markdownToHtml(markdown: string) {
  return renderToString(markdown, {
    mdxOptions: {
      rehypePlugins: [highlighterPlugin],
    },
    components: {
      img: (props: MyImageProps) => (
        <div className={styles.blogImageWrapper}>
          <MyImage {...props} className={styles.blogImage} />
        </div>
      ),
      h2: AnchorLink,
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
}
