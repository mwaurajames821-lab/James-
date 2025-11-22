import React from 'react'
import Navigation from './Navigation'
import Toggle from '../common/Toggle'
import { useTheme } from '../../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme, showImage, toggleImage } = useTheme()

  return (
    <header className="bg-white dark:bg-neutral-900 shadow-sm">
      <div className="container-center flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-md bg-brand-500 flex items-center justify-center text-white font-bold">J</div>
          <div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Jasper Studio</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Design for thoughtful brands</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden md:block">
            <Navigation />
          </nav>
          <div className="flex items-center gap-2">
            <Toggle checked={theme === 'dark'} onChange={toggleTheme} label={theme === 'dark' ? 'Dark' : 'Light'} />
            <Toggle checked={showImage} onChange={toggleImage} label={showImage ? 'Image On' : 'Image Off'} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header)
