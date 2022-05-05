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
        default:
            return state
    }
}

export default reducer;