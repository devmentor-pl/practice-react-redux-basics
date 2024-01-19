export const addUser = (name) => {
    return {
        type: 'ADD_USER',
        payload: name
    };
};

export const removeUser = (id) => {
    return {
        type: 'REMOVE_USER',
        payload: id
    };
};