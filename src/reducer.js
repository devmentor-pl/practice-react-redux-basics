const init = {
    message: 'Działa!',
    time: new Date(),
    users:[]
}

export const reducer = (state=init, {type, payload}) => {

    switch (type) {
        case 'getCurrentTime':
           return  {...state, time: new Date()}
        case 'addUser':
            const {user, id} = payload;
            const newUser = {name: user, id: id}
            return  {...state, users:[...state.users, newUser ]}
        case 'removeUser':
            const newUsers = state.users.filter(item=>item.id !==payload.id);
            return {...state, users:newUsers}
        case 'resetUsers':
            return {...state, users:[]}
        default:
            return state;
    }
}
