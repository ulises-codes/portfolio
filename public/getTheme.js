;(function getTheme() {
  window.addEventListener(
    'DOMContentLoaded',
    () => {
      const theme = JSON.parse(localStorage.getItem('theme'))

      const root = document.querySelector('body')

      const manifest = document.querySelector('#ulises-codes-webmanifest')

      const themeMeta = document.querySelector(
        '#ulises-codes-theme-color--meta'
      )

      if (!root) return

      if (theme && root.classList.value !== `theme-${theme.name}`) {
        root.classList.value = `theme-${theme.name}`
        manifest.href = `/webmanifest/${theme.name}.webmanifest`
        themeMeta.setAttribute('content', theme.background_color)
      } else {
        root.classList.value = 'theme-default'
        manifest.href = '/webmanifest/default.webmanifest'
        themeMeta.setAttribute('color', '#f1dd6d')
      }
    },
    { once: true }
  )
})()
