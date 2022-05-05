const initState =
    {
        message:'Działa!',
        time: new Date(),
        users: [],
    }


const reducer = (state = initState,action) => {
    switch(action.type){
        case 'getCurrentTime':
            return {
                ...state, time:new Date()
            }
        case 'addUser':
            return {
                ...state, users:[...state.users, action.payload]
            }
        case 'removeUser':
            const newList = state.users.filter((item)=> item.id !== action.payload.id)
            return {
               ... state, users:newList
            }
        case 'deleteAllUsers':
            return {
                ...state, users: []
            }
        default:
            return state
    }
}

export default reducer;