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

export const removeAllUsers = () => {
    return {
        type: 'REMOVE_ALL_USERS'
    };
};