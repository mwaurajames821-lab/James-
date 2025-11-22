import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  const [showImage, setShowImage] = useState(() => {
    try {
      const v = localStorage.getItem('showImage')
      return v === null ? true : v === '1'
    } catch (e) {
      return true
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('theme', theme)
    } catch (e) {}
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    try {
      localStorage.setItem('showImage', showImage ? '1' : '0')
    } catch (e) {}
  }, [showImage])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  const toggleImage = () => setShowImage(v => !v)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, showImage, toggleImage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeContext
