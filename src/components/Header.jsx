import React from 'react'
import PropTypes from 'prop-types'

function Header({headerTitle="header title"}) {
  return (
    <div>{headerTitle}</div>
  )
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
}

export default Header
