interface ThemeProps {
  name: string
  displayName?: string
  theme_color?: string
  background_color?: string
  titleFont?: string
  subtitleFont?: string
}

interface ThemeContextProps {
  currentTheme: ThemeProps
  setCurrentTheme: (theme: ThemeProps) => void
}
