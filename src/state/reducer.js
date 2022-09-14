import {GET_TIME, ADD_USER, DEL_USER} from './actions'

// STATE
const initialState = {
    message: 'Działa!',
    time: new Date(),
    users: [{id: 1, name: 'Ala'}]
}

// CREATOR ACTIONS
export const getTime = () => ({type: GET_TIME})
export const addUser = name => ({type: ADD_USER, payload: {name: name}})
export const deleteUser = id => ({type: DEL_USER, payload: {id}})

// REDUCER
const reducer = (state = initialState, action) => {
    console.log( action )
    switch( action.type ) {
        case GET_TIME:
            return {
                ...state,
                time: new Date()
            } 
        case ADD_USER:
                let id = -1
                state.users.forEach(user => {
                    if(user.id >= id) {
                        id = user.id + 1
                    }
                })
            return {
                ...state,
                users: [...state.users, {id: id, name: action.payload.name}]
            }
        case DEL_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        default:
            return state
    }
}
export default reducer