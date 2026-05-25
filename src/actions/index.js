export const addUserAction = (name, id) => {
  return {
    type: 'addUser',
    payload: {
      name: name,
      id: id
    }
  }
}

export const removeUserAction = (id) => {
  return {
    type: 'removeUser',
    payload: id
  }
}

export const removeAllUsersAction = () => {
  return {
    type: 'removeAllUsers'
  }
}