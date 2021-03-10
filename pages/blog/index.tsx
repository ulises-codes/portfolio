import type { BlogPostInfo } from 'interfaces/blog'

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

  return {
    props: {
      posts,
    },
  }
}
