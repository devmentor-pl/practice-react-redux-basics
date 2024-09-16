const initState = {
    message: 'Działa!',
    time: new Date(),
    users: [],
}

export const reducer = (state = initState, action) => {
    switch(action.type){
        case 'getCurrentTime':
            const newTime = new Date();
            return {...state, time: newTime}
        case 'addUser':
            return {
                ...state, 
                users: [...state.users, action.payload]
            }
        case 'removeUser':
            const newUsers = state.users.filter(user => user.id !== action.payload)
            return{
                ...state, users: newUsers
            }
        case 'removeAllUsers':
            return{
                ...state, users: []
            }
        default:
            return state
    }
}