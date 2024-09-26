export const addUser = (name, id) => ({
  type: "ADD_USER",
  user: { name, id },
});
export const deleteUser = (id) => ({
  type: "DELETE_USER",
  id,
});
export const resetList = () => ({
  type: "RESET",
});
