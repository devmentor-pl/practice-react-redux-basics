import { v4 as uuid } from 'uuid';

const initMessage = { message: "Działa!", time: new Date(), users: [] }

const reducer = (state = initMessage, action) => {
    switch (action.type) {
        case 'getCurrentTime':
            return {
                ...state,
                time: new Date()
            }
        case 'addUser':
            const { users } = state
            // let id
            // const usersLength = users.length

            // if (usersLength !== 0) {
            //     id = users[usersLength - 1].id + 1
            // } else { id = 0 }

            return {
                ...state,
                users: [...users, { id: uuid(), name: action.payload.name }]
            }

        case 'removeUser':
            const newUsersList = state.users.filter(user => user.id !== action.payload.id)

            return {
                ...state,
                users: newUsersList
            }

        case 'removeAllUsers':
            return {
                ...state,
                users: []
            }
        default:
            return state
    }
}

export default reducer