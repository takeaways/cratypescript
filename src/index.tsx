import React from 'react';
import { createStore } from 'redux';
import { Provider, } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import App from './App';

import rootReducer from "./Reducer"

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
