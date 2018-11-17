import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { Provider } from 'mobx-react';

import FirstStore from './stores/FirstStore';

const stores = {
  FirstStore
};

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
