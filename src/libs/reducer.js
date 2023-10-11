import { initState } from "./store";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    case "addUser":
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case "deleteUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "resetUsers":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
