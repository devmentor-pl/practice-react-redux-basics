const initialState = {
  message: 'Działa!',
  time: new Date(),
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCurrentTime':
      return {
        ...state,
        time: new Date(),
      };
    case 'addUser':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'removeUser':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'removeAllUsers':
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
