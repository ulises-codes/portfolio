import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import highlighterPlugin from 'rehype-highlight'

import renderToString from 'next-mdx-remote/render-to-string'
import MyImage from 'util/MyImage'
import type { HTMLAttributes } from 'react'

const postsDirectory = join(process.cwd(), 'blog')

export async function markdownToHtml(markdown: string) {
  return renderToString(markdown, {
    mdxOptions: {
      rehypePlugins: [highlighterPlugin],
    },
    components: {
      img: MyImage,
      h2: (props: HTMLAttributes<HTMLHeadingElement>) => <h2 {...props} />,
      a: (props: HTMLAttributes<HTMLAnchorElement>) => (
        <a
          {...props}
          className="link"
          rel="noreferrer onoopener nofollow"
          target="_blank"
        />
      ),
    },
  })
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = join(postsDirectory, `${realSlug}.mdx`)

  const { data, content } = matter.read(fullPath)

  return { slug: realSlug, meta: data, content }
}

export const getAllPostSlugs = () => {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(filename => /.mdx$/.test(filename))

  return fileNames.map(filename => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  })
}

export function getAllPosts() {
  const dataArr = fs
    .readdirSync(postsDirectory)
    .filter(filename => /.mdx$/.test(filename))
    .map(fileName => ({
      meta: matter.read(join(postsDirectory, fileName)).data,
      slug: fileName.replace('.mdx', ''),
    }))

  return dataArr
}
