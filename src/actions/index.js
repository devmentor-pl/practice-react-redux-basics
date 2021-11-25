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

const removeAll = () => {
    return {
        type: 'removeAll',
        payload: {
            users: []
        }
    }
}


export { addNewUser, removeUser, removeAll };