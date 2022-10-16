const initState = { message: "Działa", time: new Date(), users: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_CURRENT_TIME":
      return {
        ...state,
        time: new Date(),
      };
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
    case "RESET_USERS":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default reducer;
