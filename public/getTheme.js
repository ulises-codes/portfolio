;(function getTheme() {
  window.addEventListener(
    'DOMContentLoaded',
    () => {
      const theme = JSON.parse(localStorage.getItem('theme'))
      const root = document.querySelector('body')

      if (!root) return

      if (
        (!theme || theme.name === 'default') &&
        root.classList.value !== 'theme-default'
      ) {
        root.classList.value = 'theme-default'
      } else if (theme && root.classList.value !== `theme-${theme.name}`) {
        root.classList.value = `theme-${theme.name}`
      }
    },
    { once: true }
  )
})()
