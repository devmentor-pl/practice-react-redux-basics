// ./src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const INITIAL_STATE = {
  message: 'Działa!',
  time: new Date(),
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'getCurrentTime':
      return {
        ...state,
        time: new Date(),
      };
    case 'addUser':
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case 'deleteUser':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
