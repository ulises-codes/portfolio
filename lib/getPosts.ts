import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import externalLinksPlugin from 'remark-external-links'
import highlighterPlugin from 'rehype-highlight'

import renderToString from 'next-mdx-remote/render-to-string'

const postsDirectory = join(process.cwd(), 'blog')

export async function markdownToHtml(markdown) {
  return renderToString(markdown, {
    mdxOptions: {
      remarkPlugins: [externalLinksPlugin],
      rehypePlugins: [highlighterPlugin],
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
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(filename => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  })
}

export function getAllPosts() {
  const dataArr = fs.readdirSync(postsDirectory).map(fileName => ({
    data: matter.read(join(postsDirectory, fileName)).data,
    slug: fileName.replace('.mdx', ''),
  }))

  return dataArr
}
