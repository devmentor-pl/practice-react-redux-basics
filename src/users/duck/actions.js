import types from "./types";

export const getCurrentTime = (user) => {
    return {
        type: "GET_CURRENT_TIME",
    };
};

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        newUser: user,
    };
};

export const deleteUser = (userId) => {
    return {
        type: "DELETE_USER",
        userId: userId,
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};

export default { getCurrentTime, addUser, deleteUser, reset };
