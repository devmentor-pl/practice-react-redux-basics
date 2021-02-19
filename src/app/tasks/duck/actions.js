import types from './types';

const getCurrentTime = () => ({ type: types.getCurrentTime });
const addUser = (name, id) => ({ type: types.addUser, user: { name, id } });
const deleteUser = (id) => ({ type: types.deleteUser, id });
const removeAllUsers = () => ({ type: types.removeAllUsers });

export default { addUser, getCurrentTime, deleteUser, removeAllUsers };
