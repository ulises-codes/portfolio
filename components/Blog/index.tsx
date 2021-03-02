import type { BlogPostInfo } from 'interfaces/blog'

import SEO from 'util/SEO'

import PostCard from './PostCard'

export default function Blog({
  posts,
}: {
  posts: BlogPostInfo[]
  dedupedTitles: string
}) {
  return (
    <>
      <SEO title="Blog" />
      {posts.map(post => (
        <PostCard {...post} key={post.slug} />
      ))}
    </>
  )
}
