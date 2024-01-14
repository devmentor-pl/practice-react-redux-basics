import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const reducer = (state = {}, action) => {
    switch(action.type) {
        case 'getMessage': 
            return {
                message: 'Działa',
            };
        default:
            return state;
    }
  };

  const store = createStore(reducer);
  store.dispatch({ type: 'getMessage' })

const App = () => {
    console.log(store.getState())
    return (
        <Provider store={store}>
            <Task01 />
            <Task02 />
            {/* <Task02 /> */}
            {/* <Task03 /> */}
            {/* <Task04 /> */}
            {/* <Task05 /> */}
        </Provider>
    )
}

export default App;