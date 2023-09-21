import { createStore } from 'redux';

const initState = { message: 'Działa' };
const reducer = (state = initState, action) => {
    return state;
};

export const store = createStore(reducer);
