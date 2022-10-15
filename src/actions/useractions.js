export const addUser = (name, id) => {
  return {
    type: "ADD_USER",
    user: { name, id },
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const resetUsers = () => {
  return {
    type: "RESET_USERS",
  };
};
