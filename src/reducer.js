const initState = {
  message: "dziala",
  time: new Date(),
  users: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };
    case "addUser":
      const newUser = action.payload.data;
      return { ...state, users: [...state.users, newUser] };
    case "removeUser":
      const idUser = action.payload.id;
      const currentUsers = state.users.filter((user) => user.id !== idUser);
      return { ...state, users: currentUsers };
    case "removeAllUsers":
      return { ...state, users: [] };
    default:
      return state;
  }
};
