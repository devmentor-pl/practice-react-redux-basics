const initialState = { 
    message: 'Działa!',
    time: null
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