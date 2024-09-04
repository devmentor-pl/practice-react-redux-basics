import React from "react";
import { useDispatch } from "react-redux";
import { deleteUserAction } from "../actions/users";

const UserItem = ({ name = "Default Name", id = -1 }) => {
    const dispatch = useDispatch();

    const handleDeleteUser = () => {
        dispatch(deleteUserAction(id));
    };

    return (
        <li>
            {name}
            <button onClick={handleDeleteUser}>usuń</button>
        </li>
    );
};

export default UserItem;
