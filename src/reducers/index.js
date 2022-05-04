const initState =
    {
        message:'Działa!',
        time: new Date(),
    }


const reducer = (state = initState,action) => {
    switch(action.type){
        case 'getCurrentTime':
            return {
                ... state, time:new Date()
            }
        default:
            return state
    }
}

export default reducer;