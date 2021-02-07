


export const addUser = user => {
     return { 
      type: 'addUser',
      payload: { user: user },
     }
  };

export const deleteUserAction = id => {
     return { 
      type: 'deleteUser',
      payload: { id},
     }
  };
  
export const deleteUsersAll = () => {
     return { 
      type: 'deleteUserAll',
 
     }
  };

