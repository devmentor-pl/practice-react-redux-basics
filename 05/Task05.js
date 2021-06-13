import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Task05 = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <h1>Task 5</h1>
      <button onClick={() => dispatch({ type: "deleteUserAll" })}>
        remove all users
      </button>
    </section>
  );
};

export default Task05;
