import { createStore } from 'redux';

const initState = { message: 'Działa', time: new Date() };
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return { ...state, time: new Date() };
        default:
            return state;
    }
};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
