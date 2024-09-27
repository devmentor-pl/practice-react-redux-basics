export const addNewUser = (name) => {
  return {
    type: "addUser",
    payload: { name: name },
  };
};

export const removeChosenUser = (id) => {
  return {
    type: "removeUser",
    payload: { id: id },
  };
};

export const removeEntireList = () => {
  return {
    type: "removeList",
  };
};
