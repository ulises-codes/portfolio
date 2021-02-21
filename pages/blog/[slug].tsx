import dynamic from 'next/dynamic'

import type { GetStaticProps } from 'next'
import type { BlogPostProps } from 'interfaces/blog'

const BlogPost = dynamic(() => import('components/BlogPost'))

export default function Post({ source, meta }: BlogPostProps) {
  return (
    <>
      <div className="page-root">
        <BlogPost source={source} meta={meta} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getPostBySlug, markdownToHtml } = await import('lib/getPosts')

  if (!params) return { props: {} }

  const { slug } = params

  const post = getPostBySlug(typeof slug === 'string' ? slug : slug[0])

  const source = await markdownToHtml(post.content)

  return {
    props: { source, meta: post.meta },
  }
}

export const getStaticPaths = async () => {
  const { getAllPostSlugs } = await import('lib/getPosts')

  return { paths: getAllPostSlugs(), fallback: false }
}
