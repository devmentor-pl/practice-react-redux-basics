const timeReducer = (state = new Date(), action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return new Date();
        default:
            return state;
    }
};

export default timeReducer;