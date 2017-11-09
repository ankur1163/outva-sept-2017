import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import App from './App';
import reducer from './reducers';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducer)}>
  <App /></Provider>, document.getElementById('root'));
registerServiceWorker();
