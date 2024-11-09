export function addUser(data) {
  return {
    type: "addUser",
    payload: { data: data },
  };
}

export function removeUser(id) {
  return {
    type: "removeUser",
    payload: { id: id },
  };
}

export function getCurrentTime() {
  return { type: "getCurrentTime" };
}

export function removeUsers() {
  return { type: "removeUsers" };
}
