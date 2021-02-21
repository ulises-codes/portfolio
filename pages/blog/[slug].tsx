import BlogPost from 'components/BlogPost'
import { ThemeContext } from 'components/Layout'
import SEO from 'util/SEO'

import type { BlogPostProps } from 'interfaces/blog'

import type { GetStaticProps } from 'next'
import { useContext } from 'react'

export default function Post({ source, meta }: BlogPostProps) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <>
      <SEO title={meta.title}>
        {currentTheme?.titleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.titleFont}&display=block&text=${meta.title}`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
        {currentTheme?.subtitleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.subtitleFont}&display=swap`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
      </SEO>
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
