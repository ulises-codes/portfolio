import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { dedupeString } from '@ulises-codes/helper-functions'

import type { BlogPostMeta } from '../../interfaces/blog'

const postsDirectory = join(process.cwd(), 'blog')

function getMDXFiles() {
  return fs
    .readdirSync(postsDirectory)
    .filter(filename => /.mdx$/.test(filename))
}

function getRealSlug(slug: string) {
  return slug.replace(/\.mdx$/, '')
}

export function getPostBySlug(slug: string) {
  const realSlug = getRealSlug(slug)

  const fullPath = join(postsDirectory, `${realSlug}.mdx`)

  const { data, content } = matter.read(fullPath) as unknown as {
    data: BlogPostMeta
    content: string
  }

  return {
    slug: realSlug,
    meta: data,
    content,
    dedupedTitle: dedupeString(data.title),
  }
}

export const getAllPostSlugs = () => {
  const fileNames = getMDXFiles()

  return fileNames.map(filename => {
    return {
      params: {
        slug: getRealSlug(filename),
      },
    }
  })
}

export function getAllPosts() {
  const dataArr = getMDXFiles().map(fileName => ({
    meta: matter.read(join(postsDirectory, fileName)).data as BlogPostMeta,
    slug: getRealSlug(fileName),
    placeholderImg: '',
  }))

  return dataArr
}

export function getLatestPost() {
  const allPosts = getAllPosts()

  const post = allPosts.reduce((a, b) => {
    if (new Date(a.meta.publishDate) > new Date(b.meta.publishDate)) {
      return a
    }

    return b
  })

  return {
    meta: post.meta,
    slug: getRealSlug(post.slug),
  }
}
