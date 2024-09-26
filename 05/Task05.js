import React from 'react';
import { useDispatch } from "react-redux";
import { resetList } from "../src/libs/actions";

const Task05 = () => {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetList());
  };
  return (
    <section>
      <h1>Task 5</h1>
      <button onClick={handleReset}>remove all users</button>
    </section>
  );
};

export default Task05;

