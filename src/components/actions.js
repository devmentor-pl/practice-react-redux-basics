const addUer = (name, id) => ({
    type: 'addUser',
    user: {name, id}
})

const removeUser = (id) => ({
    type: 'removeUser',
    id
})

const removeAll = () => ({
    type: 'removeAll'
})

export {addUer, removeUser, removeAll}