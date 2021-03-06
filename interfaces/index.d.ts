/// <reference path="./blog.d.ts" />
/// <reference path="./modules.d.ts" />
/// <reference path="./theme.d.ts" />

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
}
