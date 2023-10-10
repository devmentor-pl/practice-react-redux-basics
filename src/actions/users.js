export const addUser = (name) => {
    return {
        type: 'addUser',
        payload: { name: name }
    }
}

export const removeUser = (id) => {
    return {
        type: 'removeUser',
        payload: { id: id }
    }
}