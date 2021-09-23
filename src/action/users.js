export const addUser = (nameUser) => {
    return {
      type: "ADD_USERS",
      payload: nameUser,
    };
  };
  
  export const deleteUser = (users) => {
    return {
      type: "DELETE_USERS",
      payload: users,
    };
  };