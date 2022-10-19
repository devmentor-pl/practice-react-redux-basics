const addUser = (name, id) => ({
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

export {addUser, removeUser, removeAll}