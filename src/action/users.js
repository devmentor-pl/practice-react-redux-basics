export const addUserAction = (nameUser) => {
  return {
    type: "addUser",
    payload: nameUser,
  };
};

export const deleteUserAction = (users) => {
  return {
    type: "deleteUser",
    payload: users,
  };
};
