import React, { useState } from "react";

import Task01 from "./../../01/Task01";
import Task02 from "./../../02/Task02";
import Task03 from "./../../03/Task03";
import Task04 from "./../../04/Task04";
import Task05 from "./../../05/Task05";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const App = () => {
  /* const getCurrentTimeValue = () => {
    return {
      type: "getCurrentTime",
    };
  };*/

  const store = createStore(reducers, composeWithDevTools());

  return (
    <>
      <Task01 />
      <Provider store={store}>
        <Task02 />
        <Task03 />
        <Task04 />
      </Provider>
      {/* <Task05 /> */}
    </>
  );
};

export default App;
