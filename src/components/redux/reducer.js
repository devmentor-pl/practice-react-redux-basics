import { act } from "react";

const initState = {
  message: "Działa!",
  time: new Date(),
  users: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getCurrentTime":
      return { ...state, time: new Date() };

    case "addUser":
      const id =
        state.users.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0) + 1;
      return {
        ...state,
        users: [...state.users, { id, name: action.payload }],
      };

    case "removeUser":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };

    case "clearUsers":
      return { ...state, users: [] };

    default:
      return state;
  }
};

export { reducer };
