const initState = {
  message: "Działa",
  users: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, message: "Działa", time: new Date() };
    case "addUser":
      return { ...state, users: [...state.users, action.user] };
    case "deleteUser":
      return { ...state, users: action.users };
    case "deleteAll":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default reducer;
