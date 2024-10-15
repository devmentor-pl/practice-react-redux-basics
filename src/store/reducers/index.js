import initialState from "../state";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };
    case "addUser":
      return {
        ...state,
        users: [
          ...state.users,
          { name: action.payload.name, id: state.users.length + 1 },
        ],
      };
    case "removeUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
