import type { BlogPostInfo } from 'interfaces/blog'
import { imgToBase64 } from 'lib/helper/imgToBase64'

import type { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'

const Blog = dynamic(() => import('components/Blog'))

export default function BlogPage(props: {
  posts: BlogPostInfo[]
  dedupedTitles: string
}) {
  return (
    <div className="page-root">
      <Blog {...props} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { getAllPosts } = await import('lib/markdown/getPosts')

  const posts = getAllPosts().sort((a, b) =>
    new Date(a.meta.publishDate) > new Date(b.meta.publishDate) ? -1 : 1
  )

  for (const post of posts) {
    post.placeholderImg = await imgToBase64(
      `${process.env.CLOUDINARY_PREFIX}f_auto,e_blur:100,w_10/${post.meta.headerImageSrc}`
    )
  }

  return {
    props: {
      posts,
    },
  }
}
