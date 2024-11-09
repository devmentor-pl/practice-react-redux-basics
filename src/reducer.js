const initialState = {
  message: "Działa!!!",
  time: new Date(),
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };
    case "addUser":
      const { data } = action.payload;
      return { ...state, users: [...state.users, data] };
    case "removeUser":
      const { id } = action.payload;
      const currentUsers = state.users.filter((user) => user.id !== id);
      return { ...state, users: currentUsers };
    case "removeUsers":
      return { ...state, users: [] };
  }

  return state;
};

export default reducer;
