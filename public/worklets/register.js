;(async function () {
  const WORKLETS = [
    'angled-corners',
    'checkerboard',
    'underline',
    'curved-line',
  ]

  const register = () => {
    WORKLETS.forEach(worklet => {
      CSS.paintWorklet.addModule(`/worklets/${worklet}.js`)
    })
  }

  if (typeof window === 'undefined') return
  if ('paintWorklet' in CSS) return register()

  await import(
    'https://unpkg.com/css-paint-polyfill@next/dist/css-paint-polyfill.js'
  )

  return register()
})()
