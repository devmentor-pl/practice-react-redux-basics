import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const App = () => {

    const initMessage = { message: "Działa!", time: new Date(), users: [{ id: 0, name: 'Anna' }] }
    const reducer = (state = initMessage, action) => {
        switch (action.type) {
            case 'getCurrentTime':
                return {
                    ...state,
                    time: new Date()
                }
            case 'addUser':
                const { users } = state
                let id
                const usersLength = users.length

                if (usersLength !== 0) {
                    id = users[usersLength - 1].id
                } else { id = 0 }
                
                return {
                    ...state,
                    users: [...users, { id: id + 1, name: action.payload.name }]
                }

            case 'removeUser':
                const newUsersList = state.users.filter(user => user.id !== action.payload.id)

                return {
                    ...state,
                    users: newUsersList
                }
            default:
                return state
        }
    }
    const store = createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
        && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return (

        <Provider store={store}>
            <Task01 />
            <Task02 />
            <Task03 />
            <Task04 />
            {/* <Task05 /> */}
        </Provider>

    )
}

export default App;