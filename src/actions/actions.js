export const addNewUser = (value) => {
  return {
      type: 'addNewUser',
      payload: {
          value
      }
  }
}

export const deleteUser = (id) => {
  return {
      type: 'deleteUser',
      payload: {
          id
      }
  }
}