import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { dedupeString } from '@ulises-codes/helper-functions'

const postsDirectory = join(process.cwd(), 'blog')

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')

  const fullPath = join(postsDirectory, `${realSlug}.mdx`)

  const { data, content } = matter.read(fullPath)

  return {
    slug: realSlug,
    meta: data,
    content,
    dedupedTitle: dedupeString(data.title),
  }
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
