import { MdxRemote } from 'next-mdx-remote/types'

interface BlogPostMeta {
  title: string
  publishDate: string
  editedDate?: string
  author: string
  excerpt: string
}

interface BlogPostInfo {
  data: BlogPostMeta
  slug: string
}

interface BlogPostProps {
  meta: BlogPostMeta
  source: MdxRemote.Source
}
