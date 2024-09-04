import React from "react";
import { useDispatch } from "react-redux";
import { deleteAllUsersAction } from "../src/actions/users";

const Task05 = () => {
    const dispatch = useDispatch();
    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={() => dispatch(deleteAllUsersAction())}>
                remove all users
            </button>
        </section>
    );
};

export default Task05;
