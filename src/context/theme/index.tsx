import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getTheme } from '../../storage/theme/getTheme'
import { updateTheme } from '../../storage/theme/updateTheme'

interface ThemeContextProps {
  isDarkMode: boolean
  handleToggleTheme: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext({} as ThemeContextProps)

function ThemeProvider({ children }: ThemeProviderProps) {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
  const isTheSystemThemeDarkMode = systemTheme.matches // return true if the system theme is dark mode
  const isTheLocalStorageThemeDarkMode = getTheme() === 'dark'
  const isDefaultThemeDarkMode =
    isTheSystemThemeDarkMode || isTheLocalStorageThemeDarkMode

  const [isDarkMode, setIsDarkMode] = useState(isDefaultThemeDarkMode)

  const handleToggleTheme = useCallback(() => {
    setIsDarkMode((prevState) => !prevState)
  }, [])

  useEffect(() => {
    const rootElement = window.document.documentElement

    if (isDarkMode) {
      rootElement.classList.add('dark')
      updateTheme('dark')
    } else {
      rootElement.classList.remove('dark')
      updateTheme('light')
    }
  }, [isDarkMode])

  return (
    <ThemeContext.Provider value={{ isDarkMode, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
