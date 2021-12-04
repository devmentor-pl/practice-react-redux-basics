export const addUserAction = user => {
  return {
    type: "addUser",
    payload: { user },
  };
};

export const removeUserAction = userId => {
  return {
    type: "removeUser",
    payload: { userId },
  };
};

export const removeAllUsers = () => {
  return {
    type: "removeAllUsers",
  };
};
