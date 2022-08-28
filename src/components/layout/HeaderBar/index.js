import React from 'react'
import './index.scss'

import UserContext from '@/context/UserContext';

function HeaderBar() {
  const userInfo = React.useContext(UserContext);
  return (
    <header className="header-bar row">
      <nav>
        <a href="/">home page</a>
      </nav>
      <div>{userInfo.username}</div>
    </header>
  )
}


export default HeaderBar;