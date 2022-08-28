import React from 'react';
import './app.scss'

import HeaderBar from '@/components/layout/HeaderBar';
import Main from '@/components/layout/Main';
import FooterBar from '@/components/layout/FooterBar';
import SideBar from '@/components/layout/SideBar';

import UserContext from '@/context/UserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        username: 'godking',
        email: 'godking@jsfund.cn',
        userId: 132,
      }
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state.userInfo}>
        <div className="layout grid">
          <HeaderBar />
          <Main />
          <SideBar />
          <FooterBar />
        </div>
      </UserContext.Provider>
    )
  }
}

export default App;