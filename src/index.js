import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'

// Routes
import AppRoutes from '../src/Routes'

// config store
import storeConfig from './Store'
const store = storeConfig()

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
