const addNewUser = user => {
    return {
        type: 'addUser',
        payload: {
            user: user
        }
    }
}

const removeUser = id => {
    return {
        type: 'removeUser',
        payload: {
            id: id
        }
    }
}

export { addNewUser, removeUser };