import React from 'react';
import { Provider } from 'react-redux';
import './config/reactotron';

import Routes from './routes';

import './styles.css';

const App = () => (
  <Provider>
    <Routes />
  </Provider>
);

export default App;
