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
            const {user, id} = action.payload
            const newUser = {name: user, id: id}
            return  {...state, users:[...state.users, newUser ]}
        default:
            return state;
    }
}
