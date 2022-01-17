import types from './types';

const INITIAL_STATE = {
  message: 'Działa!',
  time: new Date(),
  users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.getCurrentTime:
      return {
        ...state,
        time: new Date(),
      };
    case types.addUser:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case types.deleteUser:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case types.removeAllUsers:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
