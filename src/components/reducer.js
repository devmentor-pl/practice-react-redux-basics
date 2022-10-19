const initialValue = {
    message: 'Działa!',
    time: new Date()
}

const reducer = (state = initialValue, action) => {
    switch(action.type){
        case 'getCurrentTime': {
            return {
                ...state,
                time: new Date()
            }
        }
        default: 
        return state
    }
}

export default reducer