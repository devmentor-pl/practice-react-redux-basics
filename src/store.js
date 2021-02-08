
import { createStore } from "redux";
import reducerFun from './reducers'



export const store = createStore(reducerFun,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );





