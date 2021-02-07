
const initState = {
  message: "działa!!!",
  time: new Date(),
  users: [],
}

function reducerFun (state = initState, action) {
    switch (action.type) {
      case "getCurrentTime":
        return {
          ...state,
          time: new Date(),
        };

        case "addUser":
          return {
            ...state,
            users: [...state.users, action.payload.user],
          };
        case "deleteUser":
          return {
            ...state,
            users: [...state.users.filter(i => i.id !== action.payload.id)],
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


  export default reducerFun;