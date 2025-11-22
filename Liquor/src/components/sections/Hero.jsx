import React from 'react'
import Button from '../common/Button'
import ResponsiveImage from '../common/ResponsiveImage'
import { useTheme } from '../../context/ThemeContext'

const Hero = () => {
  const { showImage } = useTheme()

  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background image conditional */}
      {showImage && (
        <div className="absolute inset-0 -z-10">
          <ResponsiveImage basename={'/src/assets/images/hero'} alt="Team collaborating around a laptop" className="w-full h-full object-cover" sizes="(min-width:1024px) 60vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 dark:to-black/60" aria-hidden />
        </div>
      )}

      <div className="container-center grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-neutral-900 dark:text-neutral-100 leading-tight">We craft digital products with purpose</h1>
          <p className="mt-6 text-lg lg:text-xl text-neutral-600 dark:text-neutral-300">Jasper Studio partners with startups and small teams to design usable, beautiful web experiences that scale — strategically and sustainably.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="primary">Start a project</Button>
            <Button variant="outline">View services</Button>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <ResponsiveImage basename={'/src/assets/images/hero'} alt="Team collaborating around a laptop" className="aspect-[16/10]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(Hero)
