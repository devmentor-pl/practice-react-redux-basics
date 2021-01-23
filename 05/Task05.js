import React from "react";
import { useDispatch } from "react-redux";
import { removeAllUsers } from "../src/actions/users";

const Task05 = () => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeAllUsers());
  };

  return (
    <section>
      <h1>Task 5</h1>
      <button onClick={handleRemove}>remove all users</button>
    </section>
  );
};

export default Task05;
