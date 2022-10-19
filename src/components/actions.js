const addUser = (name, id) => ({
        type: 'addUser',
        user: {name, id}
    })

const removeUser = (id) => ({
    type: 'removeUser',
    id
})

export {addUser, removeUser}