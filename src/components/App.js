import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const App = () => {
    const initialState = {
        message: 'Działa!'
    }

    const reducer = (state = initialState, action) => {
        switch (action) {
          default:
            return state
        }
      }
      
    const store = createStore(reducer,initialState)
    return (
        <>
            <Task01 />
            <Provider store={store}>
              <Task02 />
            </Provider>
            {/* <Task03 /> */}
            {/* <Task04 /> */}
            {/* <Task05 /> */}
        </>
    )
}

export default App;