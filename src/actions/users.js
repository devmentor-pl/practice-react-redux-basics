export const addUserAction = (user) => {
    return {
        type: "addUser",
        payload: { user: user },
    };
};

export const deleteUserAction = (id) => {
    return {
        type: "deleteUser",
        payload: { id: id },
    };
};

export const deleteAllUsersAction = () => {
    return {
        type: "deleteAllUsers",
    };
};
