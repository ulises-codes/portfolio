;(function getTheme() {
  window.addEventListener(
    'DOMContentLoaded',
    () => {
      const theme = JSON.parse(localStorage.getItem('theme'))
      const root = document.querySelector('body')

      if (!root) return

      if (theme && root.classList.value !== `theme-${theme.name}`) {
        root.classList.value = `theme-${theme.name}`
      } else {
        root.classList.value = 'theme-default'
      }
    },
    { once: true }
  )
})()
