export const addUser = (name) => {
    return {
        type: 'addUser',
        payload: { name }
    }
}

export const deleteUser = (id) => {
    return {
        type: 'deleteUser',
        payload: { id }
    }
}

export const deleteUsers = () => {
    return {
        type: 'deleteUsers'
    }
}