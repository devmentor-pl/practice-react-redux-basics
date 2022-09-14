import {createStore} from 'redux'

const initialState = {
    message: 'Działa!',
    time: new Date(),
    users: [{id: 1, name: 'Ala'}]
}
const reducer = (state = initialState, action) => {
    console.log( action )
    switch( action.type ) {
        case 'getCurrentTime':
            return {
                ...state,
                time: new Date()
            } 
            case 'ADD_USER':
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
        default:
            return state
    }
}
export default reducer

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

