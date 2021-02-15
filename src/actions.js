export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: {
            user: user,
        },
    };
};
export const deleteUser = (userId) => {
    return {
        type: 'DELETE_USER',
        payload: userId,
    };
};
export const getCurrentTime = () => {
    return {
        type: 'GET_CURRENT_TIME',
    };
};
