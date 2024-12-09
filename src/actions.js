export function removeUser(id) {
  return {
    type: "removeUser",
    payload: { id: id },
  };
}

export function addUser(data) {
  return {
    type: "addUser",
    payload: { data: data },
  };
}

export function getCurrentTime() {
  return { type: "getCurrentTime" };
}

export function removeAllUsers() {
  return {
    type: "removeAllUsers",
  };
}
