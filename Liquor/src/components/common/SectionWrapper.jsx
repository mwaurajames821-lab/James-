import React from 'react'
import PropTypes from 'prop-types'

const SectionWrapper = ({ children, id }) => {
  return (
    <section id={id} className="container-center py-16">
      {children}
    </section>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string
}

export default React.memo(SectionWrapper)
