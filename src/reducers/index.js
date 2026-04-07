import { combineReducers } from 'redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';
import timeReducer from './timeReducer';

const rootReducer = combineReducers({
    message: messageReducer,
    time: timeReducer,
    users: userReducer,
});

export default rootReducer;