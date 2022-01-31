const init = {
    message: 'Działa!',
    time: new Date(),
    users:[]
}

export const reducer = (state=init, action) => {
    switch (action.type) {
        case 'getCurrentTime':
           return  {...state, time: new Date()}
        case 'addUser':
            const {user} = action.payload
            return  {...state, users:[...state.users, user ]}
        default:
            return state;
    }
}