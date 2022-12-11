const init = {
  message: "Działa!",
  time: new Date(),
  users: [],
};
export const reducer = (state = init, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "RESET":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};
