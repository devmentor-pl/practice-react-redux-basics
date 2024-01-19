const initialState = { 
    message: 'Działa!',
    time: new Date()
};

const messageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'getCurrentTime':
            return {
                ...state,
                time: new Date()
            };
        default:
            return state;
    }
};

export {messageReducer};