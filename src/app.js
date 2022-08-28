import React from 'react';
import './app.scss'

import HeaderBar from '@/components/layout/HeaderBar';
import Main from '@/components/layout/Main';
import FooterBar from '@/components/layout/FooterBar';
import SideBar from '@/components/layout/SideBar';

class App extends React.Component {
  render() {
    return (
      <div className="layout grid">
        <HeaderBar />
        <Main />
        <SideBar />
        <FooterBar />
      </div>
    )
  }
}

export default App;