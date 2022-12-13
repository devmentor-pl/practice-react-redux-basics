const initialState = {
  message: "Działa!",
  time: new Date(),
  users: [],
  lastId: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };
    case "addUser":
      const user = { name: action.payload.name, id: state.lastId + 1 };
      console.log(action.payload.name);
      return {
        ...state,
        users: [...state.users, user],
        lastId: state.lastId + 1,
      };
    case "removeUser":
      const currUsers = state.users.filter(
        (user) => user.id != action.payload.id
      );
      return {
        ...state,
        users: currUsers,
      };
    case "removeList":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
