export const addUser = (name, id) => {
    return {
        type: 'addUser',
        payload: {
            name: name,
            id: id
        }
    }
}

export const removeUser = (id) => {
    return{
            type: 'removeUser',
            payload: id,
        }
    }