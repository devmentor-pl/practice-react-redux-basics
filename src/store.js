import {createStore} from 'redux'

// STATE
const initialState = {
    message: 'Działa!',
    time: new Date(),
    users: [{id: 1, name: 'Ala'}]
}

// ACTIONS
export const GET_TIME = 'GET_TIME'
export const ADD_USER = 'ADD_USER'
export const DEL_USER = 'DEL_USER'

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

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

