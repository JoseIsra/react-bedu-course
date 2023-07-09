import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(
  // acepta todos los reducers de mi aplicación
  reducers,
  {},
  applyMiddleware(thunk)
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
