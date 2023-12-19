import { bindActionCreators } from 'redux';

import types from './types';
import { store } from '../store';

const addUserAction = item => ({
    type: types.ADD_USER,
    payload: item,
});

const removeUserAction = id => ({
    type: types.REMOVE_USER,
    payload: id,
});

const resetUsersListAction = () => ({
    type: types.RESET_USERS_LIST,
});

const userActions = bindActionCreators(
    { add: addUserAction, remove: removeUserAction, resetList: resetUsersListAction },
    store.dispatch,
);

export default userActions;
