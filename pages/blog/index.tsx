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
  const { getAllPosts } = await import('lib/getPosts')

  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
