const initState = {
  message: 'Działa!',
  time: new Date(),
  users: ['ktos1', 'ktos2']
}

const reducer = (state = initState, action) => {
  switch (action.type) {
      case 'getCurrentTime':
          return {
              ...state,
              time: new Date()
          }
      case 'addNewUser':
          return {
              ...state,
              users: [...state.users, action.payload.value]
          }
      case 'deleteUser':
          return {
              ...state,
              users: state.users.filter((user, index) => {
                  return action.payload.id !== index
              })
          }
        case 'deleteAllUsers':
          return {
            ...state,
            users: []
          }
      default:
          return state
  }
}

export default reducer