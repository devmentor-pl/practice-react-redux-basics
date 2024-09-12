const addUserAction = ({id, username}) => {
    return {
        type: "addUser",
        payload: {
          id: id,
          username: username,
        },
      };
}

const deleteUserAction =  (actualUsers) => {
    return { 
        type: "deleteUser",
        payload: actualUsers 
    }
}



export {addUserAction,deleteUserAction}