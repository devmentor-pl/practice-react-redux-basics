import types from './types';

const initState = { message: 'Działa', time: new Date(), users: [] };
const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_CURRENT_TIME:
            return { ...state, time: new Date() };
        case types.ADD_USER:
            return { ...state, users: [...state.users, { name: action.payload, id: crypto.randomUUID() }] };
        case types.REMOVE_USER:
            const { payload: id } = action;
            const newUsers = state.users.filter(user => user.id !== id);
            return { ...state, users: newUsers };
        case types.RESET_USERS_LIST:
            return { ...state, users: [] };
        default:
            return state;
    }
};

export default reducer;
