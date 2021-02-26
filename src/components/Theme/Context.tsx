import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { LOCALSTORAGE_KEYS, THEMES, THEME_KEYS, ThemeKeyType } from 'consts'
import { useLocalStorage } from 'hooks'

export type ThemeContextType = {
  theme: ThemeKeyType
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: THEME_KEYS.LIGHT,
  toggleTheme: () => undefined,
})

type PropType = PropsWithChildren<{}>

export const ThemeProvider = (props: PropType) => {
  const { children } = props
  const { getLocalStorageItem, setLocalStorageItem } = useLocalStorage(
    LOCALSTORAGE_KEYS.THEME,
  )

  const [theme, setTheme] = useState<ThemeKeyType>(THEME_KEYS.LIGHT)

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const newTheme =
        current === THEME_KEYS.LIGHT ? THEME_KEYS.DARK : THEME_KEYS.LIGHT
      setLocalStorageItem(newTheme)
      return newTheme
    })
  }, [setTheme])

  useEffect(() => {
    const initTheme =
      (getLocalStorageItem() as ThemeKeyType) || THEME_KEYS.LIGHT
    setTheme(initTheme)
  }, [setTheme, getLocalStorageItem])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={value}>
      <StyledComponentsThemeProvider theme={THEMES[theme]}>
        {children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  )
}
