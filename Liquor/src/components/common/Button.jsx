import React from 'react'
import PropTypes from 'prop-types'

const VARIANT_STYLES = {
  primary: 'bg-brand-500 text-white hover:bg-brand-600',
  secondary: 'bg-secondary text-white hover:opacity-95',
  outline: 'border border-neutral-300 text-neutral-900 bg-transparent hover:bg-neutral-100'
}

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string
}

export default React.memo(Button)
