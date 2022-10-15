import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const initState = { message: "Działa", time: new Date(), users: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CURRENT_TIME":
      return {
        ...state,
        time: new Date(),
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "RESET_USERS":
      return { ...state, users: [] };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* <Task01 /> */}
        <Task02 />
        <Task03 />
        <Task04 />
        <Task05 />
      </Provider>
    </>
  );
};

export default App;