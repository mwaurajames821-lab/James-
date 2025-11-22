import React from 'react'
import PropTypes from 'prop-types'
import ResponsiveImage from './ResponsiveImage'

const Card = ({ title, description, image, alt, children, className = '' }) => {
  return (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      {image && (
        <div className="w-full h-48">
          <ResponsiveImage basename={image} alt={alt || title} className="w-full h-48 object-cover" />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>}
        {description && <p className="mt-2 text-sm text-neutral-600">{description}</p>}
        {children}
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

export default React.memo(Card)
