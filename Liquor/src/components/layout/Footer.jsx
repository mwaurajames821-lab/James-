import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100 mt-20">
      <div className="container-center py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-semibold">Jasper Studio</div>
          <div className="text-sm text-neutral-300">Crafting intentional digital experiences</div>
        </div>
        <div className="text-sm text-neutral-400">© {new Date().getFullYear()} Jasper Studio — All rights reserved</div>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
