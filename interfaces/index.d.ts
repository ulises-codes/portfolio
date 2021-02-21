declare module '*.svg'
declare module '*.png'
declare module '*.mp3'

declare interface BlogPost {
  data: {
    title: string
    publishDate: string
    editedDate?: string
    author: string
    excerpt: string
  }
  slug: string
}
