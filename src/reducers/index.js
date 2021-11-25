const initState = {
    message: 'Działa',
    users: []
};

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'getCurrentTime':
            return { ...state, time: new Date() };
        case 'addUser':
            const { user } = action.payload;
            const ids = state.users.map(user => user.id);
            const id = ids.length === 0 ? 0 : ids.length
            return { ...state, users: [...state.users, { user, id } ]};
        case 'removeUser':
            const { id: numberId } = action.payload;
            const list = state.users.filter(user => user.id !== numberId);
            return { ...state, users: list };
        case 'removeAll':
            const { users } = action.payload;
            return { ...state, users }
        default:
            return state;
    };
};

export default reducer;