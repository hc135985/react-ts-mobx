import React from 'react';
import ReactDOM from 'react-dom';
import stores from './store/index'
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import 'antd/dist/antd.css'
// import 'antd/dist/antd.compact.css'

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

