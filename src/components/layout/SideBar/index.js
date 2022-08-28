import React from 'react'
import './index.css'
import UserContext from '@/context/UserContext';

class SideBar extends React.Component {
  render() {
    const userInfo = this.context;
    const userHtml = Object.keys(userInfo).map((key, index) => {
      return <h1 key={index}>{userInfo[key]}</h1> 
    });
    return (      
      <aside className="side-bar">
        <section>
          {userHtml}
        </section>
      </aside>
    )
  }
}

SideBar.contextType = UserContext;

export default SideBar;