import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'light' | 'dark'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('iris-theme') as Theme | null
    if (saved) {
      return saved
    }

    // Check system preference if no saved preference
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light'
    }

    return 'dark'
  })

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem('iris-theme', newTheme)

    // Simple class toggle
    document.documentElement.classList.toggle('light', newTheme === 'light')
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
