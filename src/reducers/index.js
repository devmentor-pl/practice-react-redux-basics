import * as actions from "../actions/actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actions.getMessageAction().type:
      return {
        message: "Działa",
      };
    case actions.getCurrentTimeAction().type:
      return {
        ...state,
        time: new Date(),
      };
    case actions.usersAction().type:
      return {
        ...state,
        users: [],
      };
    case actions.addUserAction().type:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case actions.deleteUserAction().type:
      const updatedUsers = state.users.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        users: updatedUsers,
      };
    case actions.clearUsersAction().type:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
