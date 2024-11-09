import React from 'react';
import { removeUsers } from "../src/actions";
import { useDispatch } from "react-redux";

const Task05 = () => {
    const dispatch = useDispatch();

    return (
      <section>
        <h1>Task 5</h1>
        <button onClick={() => dispatch(removeUsers())}>
          remove all users
        </button>
      </section>
    );
}

export default Task05;

