import { createStore } from 'redux';

const initState = { message: 'Działa', time: new Date(), users: [] };
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return { ...state, time: new Date() };
        case 'addUser':
            return { ...state, users: [...state.users, { name: action.payload, id: crypto.randomUUID() }] };
        case 'removeUser':
            const { payload: id } = action;
            const newUsers = state.users.filter(user => user.id !== id);
            return { ...state, users: newUsers };
        default:
            return state;
    }
};

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
