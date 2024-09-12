export function getCurrentTime() {
  return { type: 'getCurrentTime' }
}

export function addUser(data) {
  return {
    type: 'addUser',
    payload: { data }
  }
}

export function removeUser(id) {
  return {
    type: 'removeUser',
    payload: { id }
  }
}

export function clearUsers() {
  return { type: 'clearUsers' }
}