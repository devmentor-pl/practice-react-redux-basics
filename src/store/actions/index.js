export const getCurrentTimeAction = () => {
  return {
    type: "getCurrentTime",
  };
};

export const addUserAction = (name) => {
  return {
    type: "addUser",
    payload: { name },
  };
};

export const removeUserAction = (id) => {
  return {
    type: "removeUser",
    payload: { id },
  };
};
