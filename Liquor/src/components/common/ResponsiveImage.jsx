import React from 'react'
import PropTypes from 'prop-types'

const widths = [400, 800, 1200, 1920]

const buildSrcSet = (base, ext) => {
  return widths.map(w => `${base}-${w}.${ext} ${w}w`).join(', ')
}

const ResponsiveImage = ({ basename, alt = '', className = '', sizes = '100vw', ...props }) => {
  const webpSet = buildSrcSet(basename, 'webp')
  const jpgSet = buildSrcSet(basename, 'jpg')
  const fallback = `${basename}-800.jpg`

  return (
    <picture>
      <source type="image/webp" srcSet={webpSet} sizes={sizes} />
      <source type="image/jpeg" srcSet={jpgSet} sizes={sizes} />
      <img src={fallback} alt={alt} className={`w-full h-auto object-cover ${className}`} loading="lazy" {...props} />
    </picture>
  )
}

ResponsiveImage.propTypes = {
  basename: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  sizes: PropTypes.string
}

export default React.memo(ResponsiveImage)
