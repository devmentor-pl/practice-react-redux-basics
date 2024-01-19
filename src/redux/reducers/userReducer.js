const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, { id: Date.now(), name: action.payload }]
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload)
            };
        case 'REMOVE_ALL_USERS':
            return {
                ...state,
                users: []
            };
        default:
            return state;
    }
};

export  {userReducer};