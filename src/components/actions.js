const addUser = (name, id) => ({
    type: 'addUser',
    user: { name, id }
});

const deleteUser = (id) => ({
    type: 'deleteUser',
    id
});

export { addUser, deleteUser };