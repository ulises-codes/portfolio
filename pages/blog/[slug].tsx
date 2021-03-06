import dynamic from 'next/dynamic'

import type { GetStaticProps } from 'next'
import type { BlogPostProps } from 'interfaces/blog'
import type { PageProps } from 'interfaces'
import Head from 'next/head'

const BlogPost = dynamic(() => import('components/BlogPost'))

export default function Post({
  source,
  meta,
  slug,
  theme,
  dedupedTitle,
}: BlogPostProps & PageProps & { dedupedTitle: string }) {
  return (
    <>
      <Head key="blog-post-tags">
        <link
          href={
            theme && theme.titleFont
              ? `https://fonts.googleapis.com/css2?family=${theme.titleFont}&display=block&text=${dedupedTitle}`
              : ''
          }
          rel="preload"
          as="style"
          type="text/css"
          crossOrigin="anonymous"
          onLoad={"this.rel='stylesheet'" as any}
        />
      </Head>
      <div className="page-root">
        <BlogPost source={source} meta={meta} slug={slug} />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { getPostBySlug } = await import('lib/markdown/getPosts')
  const { markdownToHtml } = await import('lib/markdown/markdownToHtml')

  if (!params) return { props: {} }

  const { slug } = params

  const post = getPostBySlug(typeof slug === 'string' ? slug : slug[0])

  const source = await markdownToHtml(post.content)

  return {
    props: { source, meta: post.meta, slug, dedupedTitle: post.dedupedTitle },
  }
}

export const getStaticPaths = async () => {
  const { getAllPostSlugs } = await import('lib/markdown/getPosts')

  return { paths: getAllPostSlugs(), fallback: false }
}
