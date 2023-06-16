export default (async function registerWorklets() {
  if (typeof window === 'undefined') return

  function register() {
    const WORKLETS = ['checkerboard', 'curved-line', 'extra-underline']

    WORKLETS.forEach(worklet => {
      window.CSS.paintWorklet.addModule(`/worklets/${worklet}.js`)
    })
  }

  if ('paintWorklet' in CSS) {
    return register()
  }

  await import('css-paint-polyfill')
  register()
}());
