import { createStore, combineReducers } from 'redux';
import { messageReducer } from './reducers/messageReducer';
import { userReducer } from './reducers/userReducer';

const rootReducer = combineReducers({
    users: userReducer,
    message: messageReducer
});


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };