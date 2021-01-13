export default async function registerWorklets() {
  if (typeof window === 'undefined') return

  const register = () => {
    const WORKLETS = [
      'angled-corners',
      'checkerboard',
      'underline',
      'curved-line',
    ]

    WORKLETS.forEach(worklet => {
      console.log('WORKLET: ', worklet)
      CSS.paintWorklet.addModule(`/worklets/${worklet}.js`)
    })
  }

  if ('paintWorklet' in CSS) {
    return register()
  }

  await import(
    /* webpackIgnore: true */
    'https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js'
  )

  return register()
}
