export default (async function registerWorklets() {
  if (typeof window === 'undefined') return
  await import('css-paint-polyfill')

  function register() {
    const WORKLETS = [
      'checkerboard',
      'curved-line',
      'extra-underline',
      'angled-corners',
    ]

    WORKLETS.forEach(worklet => {
      window.CSS.paintWorklet.addModule(`/worklets/${worklet}.js`)
    })
  }

  if ('paintWorklet' in CSS) {
    return register()
  }
})()
