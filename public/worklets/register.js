export default (async function registerWorklets() {
  const register = () => {
    const WORKLETS = [
      'checkerboard',
      'curved-line',
      'extra-underline',
      'angled-corners',
    ]

    WORKLETS.forEach(worklet => {
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
})()
