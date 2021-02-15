const initialState = {
    message: 'dziala!',
    time: new Date(),
    users: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURRENT_TIME':
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
                users: state.users.filter((user) => user.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
