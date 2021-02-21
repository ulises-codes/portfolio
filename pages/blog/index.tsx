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
  const { dedupeString } = await import('@ulises-codes/helper-functions')

  const posts = getAllPosts()
  const dedupedTitles = dedupeString(
    posts
      .map(post => post.data.title)
      .concat(['Blog', 'Theme', "I'm Bored"])
      .join('')
  )

  return {
    props: {
      posts,
      dedupedTitles,
    },
  }
}
