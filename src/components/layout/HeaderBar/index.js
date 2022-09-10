import React from 'react'
import './index.scss'

import { NavLink } from 'react-router-dom'

import UserContext from '@/context/UserContext';

function HeaderBar() {
  const userInfo = React.useContext(UserContext);
  const getActiveClassName = ({isActive}) => {
    if (isActive) {
      return 'link active';
    }
    return 'link'
  }
  return (
    <header className="header-bar row">
      <nav>
        <NavLink className={getActiveClassName} to="/">Home Page</NavLink>
        <NavLink className={getActiveClassName} to="/user-list">User List</NavLink>
        <NavLink className={getActiveClassName} to="/counter">Redux-Counter Page</NavLink>        
      </nav>
      <div>{userInfo.username}</div>
    </header>
  )
}


export default HeaderBar;