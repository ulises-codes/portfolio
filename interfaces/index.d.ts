/// <reference path="./blog.d.ts" />
/// <reference path="./modules.d.ts" />

export declare global {
  interface Window {
    __CPEmbed: () => void
  }
}
