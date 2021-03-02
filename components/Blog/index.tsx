import type { BlogPostInfo } from 'interfaces/blog'
import BlogSEO from 'util/SEO/BlogSEO'

import PostCard from './PostCard'

export default function Blog({
  posts,
}: {
  posts: BlogPostInfo[]
  dedupedTitles: string
}) {
  return (
    <>
      <BlogSEO posts={posts} />
      {posts.map(post => (
        <PostCard {...post} key={post.slug} />
      ))}
    </>
  )
}
