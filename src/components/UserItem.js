import React from "react";
import { deleteUser } from "../app";

const UserItem = (props) => {
    return (
        <li>
            {props.name}
            <button onClick={() => store.dispatch(deleteUser(props.id))}>
                usuń
            </button>
        </li>
    );
};

export default UserItem;
