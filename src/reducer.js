const initialState = {
  message: "Działa!",
  time: new Date(),
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };
    case "addUser": {
      const maxId = state.users.reduce(
        (max, user) => (user.id > max ? user.id : max),
        0
      );
      const newId = maxId + 1;
      const newUser = { id: newId, name: action.payload };
      return { ...state, users: [...state.users, newUser] };
    }
    case "removeUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "clearUsers":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default reducer;
