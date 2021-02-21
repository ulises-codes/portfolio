import { ThemeContext } from 'components/Layout'
import themeList from 'lib/themeList'
import { useContext, useState } from 'react'
import styles from './styles.module.scss'

export default function ThemeMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

  return (
    <div
      className={styles.menuWrapper}
      tabIndex={-1}
      onBlur={e => {
        if (e.relatedTarget) {
          if (
            e.relatedTarget === e.currentTarget ||
            e.currentTarget.contains(e.relatedTarget as HTMLElement)
          ) {
            return
          }
        }

        setIsOpen(false)
      }}>
      <button className="button" onClick={() => setIsOpen(!isOpen)}>
        Theme
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {themeList.map(theme => (
            <li
              data-theme={theme.name}
              key={theme.name}
              className={currentTheme?.name === theme.name ? styles.active : ''}
              onClick={() => setCurrentTheme && setCurrentTheme(theme)}>
              {theme.displayName ?? theme.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
