import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

function getInitialLanguage() {
  // Check localStorage first
  const saved = localStorage.getItem('language')
  if (saved && (saved === 'en' || saved === 'ru')) {
    return saved
  }
  
  // Check browser language
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith('ru') || browserLang.startsWith('be')) {
    return 'ru'
  }
  
  return 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    const initialLang = getInitialLanguage()
    setLanguage(initialLang)
    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('language', language)
      document.documentElement.lang = language
    }
  }, [language, isInitialized])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isInitialized }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
