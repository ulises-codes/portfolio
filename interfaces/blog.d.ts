import { MdxRemote } from 'next-mdx-remote/types'

interface BlogPostMeta {
  title: string
  publishDate: string
  editedDate?: string
  author: string
  excerpt: string
  headerImageSrc: string
  headerImageAlt: string
}

interface BlogPostInfo {
  meta: BlogPostMeta
  slug: string
}

interface BlogPostProps {
  meta: BlogPostMeta
  source: MdxRemote.Source
}
