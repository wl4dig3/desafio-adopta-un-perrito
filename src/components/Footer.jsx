import React from 'react'
import PropTypes from 'prop-types'

function Footer({footerTitle="footer title"}) {
  return (
    <p>{footerTitle}</p>
  )
}

Footer.propTypes = {
    footerTitle: PropTypes.string.isRequired
}

export default Footer
