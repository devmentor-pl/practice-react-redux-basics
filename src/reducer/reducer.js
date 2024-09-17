const initalState = {
    message: 'Działa!',
    time: new Date(),
    users: []
}

const reducer = (state = initalState, action) => {
    switch(action.type) {
        case 'getCurrentTime':
            return {
                ...state, 
                time: new Date()
            }
        case 'addUser': 
        {
            const {name} = action.payload
            const idsList = state.users.map(user => user.id)
            const maxId = idsList.length === 0 ? 0 : Math.max(...idsList)

            const id = maxId + 1

            return {
                ...state, 
                users: [...state.users, { id, name }]
            }
        }

        case 'deleteUser': 
        {
            const id = action.payload.id

            const newUsers = state.users.filter(user => { 
                return user.id !== id
            })

            return {
                ...state,
                users: [...newUsers]
            }
        }

        case 'deleteUsers':
            return {
                ...state,
                users: []
            }

        default:
            return state
    }
}

export default reducer