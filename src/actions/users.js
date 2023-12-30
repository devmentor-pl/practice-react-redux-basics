const addUserAction = (newUser) => ({
  type: "addUser",
  newUser,
});

const removeUserAction = (idToRemove) => ({
  type: "removeUser",
  idToRemove,
});

const clearUsers = () => ({
  type: "clearUsers",
});

export { addUserAction, removeUserAction, clearUsers };
