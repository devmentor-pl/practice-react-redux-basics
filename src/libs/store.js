import {createStore } from 'redux'
import reducer from '../libs/reducer'

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
   )

   export default store