import React from 'react'

import './index.scss'

function HeaderBar() {
  console.log('header')
  return (
    <header className="header-bar">
      <nav>
        <a href="/">home page</a>
      </nav>
    </header>
  )
}

export default HeaderBar;