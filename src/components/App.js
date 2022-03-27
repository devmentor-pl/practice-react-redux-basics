import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const App = () => {
  const store = createStore(() => {
    return { message: 'Działa!' };
  });

  return (
    <>
      <Task01 />
      <React.StrictMode>
        <Provider store={store}>
          <Task02 />
        </Provider>
      </React.StrictMode>

      {/* <Task03 /> */}
      {/* <Task04 /> */}
      {/* <Task05 /> */}
    </>
  );
};

export default App;
