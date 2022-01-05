/// <reference path="./blog.d.ts" />
/// <reference path="./modules.d.ts" />
/// <reference path="./theme.d.ts" />

import type { BlogPostInfo } from './blog'
import type { Languages } from 'interfaces/languages'

export declare global {
  interface Window {
    __CPEmbed: () => void
    workbox: {
      active: Promise<ServiceWorker>
      messageSW: ({ action: string }) => Promise<{}>
    }

    CSS: {
      paintWorklet: {
        addModule: (path: string) => void
      }
    }
  }
}

export interface PageProps {
  theme: ThemeProps
  latestPost: BlogPostInfo
}

export type ProjectProps = {
  name: string
  description?: string
  imgSrc: string
  languages: Languages[]
  url: string
}
