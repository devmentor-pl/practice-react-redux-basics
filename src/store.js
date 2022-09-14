import {createStore} from 'redux'

const initialState = {
    message: 'Działa!',
    time: new Date(),
}
const reducer = (state = initialState, action) => {
    console.log( action )
    switch( action.type ) {
        case 'getCurrentTime':
            return {
                ...state,
                time: new Date()
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

