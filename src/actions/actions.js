export const getMessageAction = () => ({
    type: "getMessage",
  });
  
  export const getCurrentTimeAction = () => ({
    type: "getCurrentTime",
  });
  
  export const usersAction = () => ({
    type: "users",
  });
  
  export const addUserAction = (user) => ({
    type: "add_user",
    payload: user,
  });
  
  export const deleteUserAction = (id) => ({
    type: "delete_user",
    payload: id,
  });
  
  export const clearUsersAction = () => ({
    type: "clear_users",
  });