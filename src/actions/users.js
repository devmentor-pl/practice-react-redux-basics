const addUserAction = (newUser) => ({
  type: "addUser",
  newUser,
});

const removeUserAction = (idToRemove) => ({
  type: "removeUser",
  idToRemove,
});

export { addUserAction, removeUserAction };
