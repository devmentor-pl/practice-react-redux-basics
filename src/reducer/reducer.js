const initState = {
  message: 'Działa!',
  time: new Date(),
  users: []
}

const reducer = (state = initState, action) => {
  switch(action.type) {
      case 'getCurrentTime':
          return {...state, time: new Date()}
      case 'addUser':
          const newUser = action.payload.data
          return {...state, users: [...state.users, newUser]}
      case 'removeUser':
          const removedUserId = action.payload.id
          const currUsers = state.users.filter(user => user.id !== removedUserId)
          return {...state, users: currUsers}
      case 'removeAllUsers':
        return {...state, users: []}
  }
  return state;
}

export default reducer