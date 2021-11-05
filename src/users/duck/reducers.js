import types from "./types";

const initState = { message: "Dziala!", time: new Date(), users: [] };

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_CURRENT_TIME:
            const newTime = new Date();
            return {
                ...state,
                time: newTime,
            };
        case types.ADD_USER:
            const newId = state.users.length + 1;
            const newUser = { user: action.newUser, id: newId };
            return {
                ...state,
                users: [...state.users, newUser],
            };
        case types.DELETE_USER:
            const userId = action.userId;
            return {
                ...state,
                users: state.users.filter((user) => user.id !== userId),
            };
        case types.RESET:
            return {
                ...state,
                users: [],
            };
        default:
            return state;
    }
};

export default reducer;
