const addUser = (name, id) => ({
    type: 'addUser',
    user: { name, id }
});

const deleteUser = (id) => ({
    type: 'deleteUser',
    id
});

const removeAllUsers = () => ({
    type: 'removeAll',
});

export { addUser, deleteUser,removeAllUsers };