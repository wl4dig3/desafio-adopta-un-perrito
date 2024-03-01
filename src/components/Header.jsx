import React from 'react'
import PropTypes from 'prop-types'

function Header({headerTitle="header title"}) {
  return (
    <h1 className='header-title'>{headerTitle}</h1>
  )
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
}

export default Header
