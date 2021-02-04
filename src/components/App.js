import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';
import {Provider} from 'react-redux'
import {createStore} from 'redux';

const state = {
    message: "działa!!!",
    time: new Date(),
}

// const store = createStore(() => {
//   return state;
// });


const reducer = (state, action) => {
    switch (action.type) {
      case "getCurrentTime":
        return {
          ...state,
          time: new Date(),
        };
      default:
        return state;
    }
  };

  const store = createStore(reducer,
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/* coś zrobiłam nie tak? bo w tym narzędzniuu state mam undefined*/
  

const App = () => {
    return (
        <>
        <Provider store={store}>
            {/* <Task01 /> */}
            {/* <Task02 /> */}
            <Task03 />
            {/* <Task04 /> */}
            {/* <Task05 /> */}
            </Provider>
        </>
    )
}

export default App;