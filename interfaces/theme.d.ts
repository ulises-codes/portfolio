interface ThemeProps {
  name: string
  displayName?: string
  titleFont?: string
  subtitleFont?: string
}

interface ThemeContextProps {
  currentTheme?: ThemeProps
  setCurrentTheme?: (theme: ThemeProps) => void
}
