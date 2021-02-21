import Blog from 'components/Blog'
import { ThemeContext } from 'components/Layout'
import type { BlogPostInfo } from 'interfaces/blog'

import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useContext } from 'react'

export default function BlogPage({
  posts,
  dedupedTitles,
}: {
  posts: BlogPostInfo[]
  dedupedTitles: string
}) {
  const { currentTheme } = useContext(ThemeContext)

  return (
    <>
      <Head>
        {currentTheme?.subtitleFont && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${currentTheme.subtitleFont}&display=block&text=${dedupedTitles}`}
            rel="preload"
            as="style"
            type="text/css"
            crossOrigin="anonymous"
            onLoad={"this.rel='stylesheet';this.onload=null" as any}
          />
        )}
      </Head>
      <div className="page-root">
        <Blog posts={posts} />
      </div>
    </>
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
