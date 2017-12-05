import React from 'react';
import { hydrate } from 'react-dom';

import BrowserRouter from 'react-router-dom/BrowserRouter';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Promise from 'promise-polyfill';

import reducers from '../core/reducer';
import Entry from './container/index';

// style entry
import './style/index.less';

if (!window.Promise) {
  window.Promise = Promise;
}

if (!window.global) {
  window.global = window;
}

const store = createStore(
  reducers, window.__INITIAL_STATE__, applyMiddleware(thunk)
);

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Entry />
      </BrowserRouter>
    </Provider>
  );
};

hydrate(<AppRouter />, document.querySelector('#root'));
