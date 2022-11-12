const initState = {
    message: 'Działa!',
    time: new Date(),
    users: [],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return { ...state, time: new Date() }
        case 'addUser':
            const { data } = action.payload;
            return { ...state, users: [...state.users, data] }
        case 'removeUser':
            const { id } = action.payload;
            const currUsers = state.users.filter(u => u.id !== id);
            return { ...state, users: currUsers }
        case 'clearUsers':
            return { ...state, users: [] }
    }

    return state
}

export default reducer;