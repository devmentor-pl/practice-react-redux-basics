import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

const App = () => {
    const initialState = {
        message: 'dziala!',
        time: new Date(),
        users: [],
    };

    const updateTime = () => {
        return { ...state, time: new Date() };
    };

    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'getCurrentTime':
                return { ...state, time: new Date() };
            // updateTime() // mogę to obsłuyć poza reduktorem?
            case 'ADD_USER':
                return {
                    ...state,
                    users: [...state.users, action.payload.user],
                };
            case 'DELETE_USER':
                return {
                    ...state,
                    users: state.users.filter(
                        (user) => user.id !== action.payload
                    ),
                };
            default:
                return state;
        }
    };
    const store = createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    );

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
