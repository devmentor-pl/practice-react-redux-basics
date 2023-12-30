export const addUserAction = (item) => ({
  type: 'addUser',
  payload: item,
});

export const removeUserAction = (id) => ({
  type: 'removeUser',
  payload: id,
});

export const removeAllUsers = () => ({
  type: 'removeAllUsers',
});
