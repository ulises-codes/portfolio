/// <reference path="./blog.d.ts" />
/// <reference path="./modules.d.ts" />

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
