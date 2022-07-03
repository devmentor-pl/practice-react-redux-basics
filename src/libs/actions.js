export const addUser = (name, id) => ({
  type: "addUser",
  user: { name, id },
});

export const deleteUser = (id) => ({
  type: "deleteUser",
  id,
});

export const resetUsers = () => ({
  type: "resetUsers",
});
