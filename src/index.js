import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom/client';

import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/toolkitIndex';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>    
  </HashRouter>
)
