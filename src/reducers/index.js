const initState = { message: "Działa!", time: new Date(), users: [] };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return {
        ...state,
        time: new Date(),
      };
    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "deleteUserAll":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;