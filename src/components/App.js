import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';


import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const reducers = (state = {}, action) => {
  switch (action.type) {
    case "getMessage":
      return {
        message: "Działa",
      };
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    case "users":
      return {
        ...state,
        users: [],
      };
    case "add_user":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
      case "delete_user":
        const updatedUsers = state.users.filter(user => user.id !== action.payload);
        return {
          ...state,
          users: updatedUsers,
        }
    default:
      return state;
  }
};

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch({ type: "getMessage" });
store.dispatch({ type: "getCurrentTime" });
store.dispatch({ type: "users" });

const App = () => {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Task01 />
      <Task02 />
      <Task03 />
      <Task04 />
      {/* <Task05 /> */}
    </Provider>
  );
};

export default App;