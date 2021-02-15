export const addUser = (user) => {
    console.log('🚀 ~ addUser ~ user', user);
    return {
        type: 'ADD_USER',
        payload: {
            user: user,
        },
    };
};
