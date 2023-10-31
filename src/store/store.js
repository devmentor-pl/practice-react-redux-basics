import reducer from "../reducer/reducer"
import { configureStore } from '@reduxjs/toolkit'
// import { createStore } from "redux"

// const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())
const store = configureStore({
  reducer: reducer
})

export default store