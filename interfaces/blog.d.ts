import { MdxRemote } from 'next-mdx-remote/types'

interface BlogPostMeta {
  title: string
  publishDate: string
  editedDate?: string
  author: string
  excerpt: string
  headerImageSrc: string
  headerImageAlt: string
  headerImageCaption: string
}

interface BlogPostInfo {
  meta: BlogPostMeta
  slug: string
  postPlaceholderImg: string
}

interface BlogPostProps extends BlogPostInfo {
  source: MdxRemote.Source
  placeholderImg: string
}
