const initialState = {
  message: "Działa!",
  time: new Date(),
  users: [{ userName: "Maro", id: 0 }],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };

    case "addUser":
      return {
        ...state,
        users: [...state.users, action.newUser],
      };

    case "removeUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.idToRemove),
      };

    default:
      return state;
  }
};

export default reducer;
