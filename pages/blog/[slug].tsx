import dynamic from 'next/dynamic'

import type { GetStaticProps } from 'next'
import type { BlogPostProps } from 'interfaces/blog'
import type { PageProps } from 'interfaces'
import Head from 'next/head'
import { imgToBase64 } from 'lib/helper/imgToBase64'

const BlogPost = dynamic(() => import('components/BlogPost'))

export default function Post({
  source,
  meta,
  slug,
  theme,
  placeholderImg,
}: BlogPostProps &
  PageProps & { dedupedTitle: string; placeholderImg: string }) {
  return (
    <>
      <Head key="blog-post-tags">
        <link
          href={`/fonts/${
            theme.titleFont ? theme.titleFont.toLowerCase() : 'bungee-shade'
          }.woff2`}
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="page-root">
        <BlogPost
          source={source}
          meta={meta}
          slug={slug}
          placeholderImg={placeholderImg}
        />
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

  const placeholderImg = await imgToBase64(
    `${process.env.CLOUDINARY_PREFIX}f_auto,e_blur:100,w_10/${post.meta.headerImageSrc}`
  )

  return {
    props: {
      source,
      meta: post.meta,
      slug,
      dedupedTitle: post.dedupedTitle,
      placeholderImg,
    },
  }
}

export const getStaticPaths = async () => {
  const { getAllPostSlugs } = await import('lib/markdown/getPosts')

  return { paths: getAllPostSlugs(), fallback: false }
}
