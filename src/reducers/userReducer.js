const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'addUser': {
            const nextId = state.length > 0
                ? Math.max(...state.map(u => u.id)) + 1
                : 1;

            return [...state, { id: nextId, name: action.payload }];
        }

        case 'removeUser':
            return state.filter(u => u.id !== action.payload);

        case 'removeAllUsers':
            return [];

        default:
            return state;
    }
};

export default userReducer;