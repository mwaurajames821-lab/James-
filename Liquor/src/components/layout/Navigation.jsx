import React from 'react'

const Navigation = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex items-center gap-6 text-sm">
        <li><a className="text-neutral-700 hover:text-brand-500" href="#features">Services</a></li>
        <li><a className="text-neutral-700 hover:text-brand-500" href="#about">About</a></li>
        <li><a className="text-neutral-700 hover:text-brand-500" href="#contact">Contact</a></li>
        <li><a className="inline-flex items-center px-4 py-2 rounded-md bg-brand-500 text-white text-sm" href="#contact">Get started</a></li>
      </ul>
    </nav>
  )
}

export default React.memo(Navigation)
