import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../users/duck/actions";

const UserItem = (props) => {
    return (
        <li>
            {props.name}
            <button onClick={() => props.delete(props.id)}>usuń</button>
        </li>
    );
};

const mapActionToProps = {
    delete: deleteUser,
};

export default connect(null, mapActionToProps)(UserItem);
