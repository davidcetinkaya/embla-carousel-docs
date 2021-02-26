import { useCallback } from 'react'
import { isBrowser } from 'utils'

type UseLocalStorageType = {
  getLocalStorageItem: () => string
  setLocalStorageItem: (value: string) => void
}

export const useLocalStorage = (key: string): UseLocalStorageType => {
  const getLocalStorageItem = useCallback(() => {
    if (!isBrowser) return ''
    let storedValue
    try {
      storedValue = JSON.parse(localStorage.getItem(key) || '')
      document.body.classList.add('dark-theme')
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
    return storedValue || ''
  }, [])

  const setLocalStorageItem = useCallback((value: string) => {
    if (!isBrowser) return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
    }
  }, [])

  return {
    getLocalStorageItem,
    setLocalStorageItem,
  }
}
