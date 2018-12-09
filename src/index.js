import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { Provider } from 'mobx-react';

import FindRes from './stores/FindRes';
import AreaInfo from './stores/AreaInfo';

const stores = {
  FindRes,
  AreaInfo,
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
