import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";

const App = () => {
  const init = {
    message: "Działa!",
    time: new Date(),
  };
  const reducer = (state = init, action) => {
    switch (action.type) {
      case "setMessage":
        return { message: state.message };
      case "getCurrentTime":
        return { ...state, time: new Date() };
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  return (
    <>
      <Task01 />
      <Provider store={store}>
        <Task02 />
        <Task03 />
        {/* <Task04 /> */}
        {/* <Task05 /> */}
      </Provider>
    </>
  );
};

export default App;