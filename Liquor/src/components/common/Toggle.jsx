import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ checked, onChange, label }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm focus-ring ${checked ? 'bg-brand-500 text-white' : 'bg-neutral-100 text-neutral-800 border border-neutral-200'}`}
      onClick={onChange}
    >
      <span className="w-4 h-4 rounded-full bg-white border" aria-hidden />
      <span>{label}</span>
    </button>
  )
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string
}

export default React.memo(Toggle)
