const initialValue = {
    message: 'Działa!',
    time: new Date(),
    users: []
}

const reducer = (state = initialValue, action) => {
    switch(action.type){
        case 'getCurrentTime': {
            return {
                ...state,
                time: new Date()
            }
        }
        case 'addUser': {
            return {
                ...state,
                users: [...state.users, action.user]
            }
        }

        case 'removeUser': {
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id)
            }
        }
        case 'removeAll': {
            return {
                ...state,
                users: []
            }
        }
        default: 
        return state
    }
}

export default reducer