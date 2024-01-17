import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers/index'

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch({ type: "getMessage" });
store.dispatch({ type: "getCurrentTime" });
store.dispatch({ type: "users" });
store.dispatch({ type: "clear_users"})

const App = () => {
  return (
    <Provider store={store}>
      <Task01 />
      <Task02 />
      <Task03 />
      <Task04 />
      <Task05 />
    </Provider>
  );
};

export default App;