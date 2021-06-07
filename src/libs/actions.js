const addUser = (name, id) => {
  return {
    type: "addUser",
    user: { name, id },
  };
};

const deleteUser = (users, id) => {
  const filtered = users.filter((user) => {
    return user.id !== id;
  });
  return {
    type: "deleteUser",
    users: filtered,
  };
};

const deleteAll = () => {
  return {
    type: "deleteAll",
  };
};

export { addUser, deleteUser, deleteAll };
