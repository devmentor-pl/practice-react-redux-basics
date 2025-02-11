const addUserAction = (user) => ({ type: "addUser", payload: user });
const removeUserAction = (id) => ({ type: "removeUser", payload: id });
const clearUsersAction = () => ({ type: "clearUsers" });

export { addUserAction, removeUserAction, clearUsersAction };
