import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAllUsers } from '../src/actions/users';

const Task05 = () => {
  const dispatch = useDispatch();
  const resetUsersList = () => {
    dispatch(removeAllUsers());
  };
  return (
    <section>
      <h1>Task 5</h1>
      <button onClick={resetUsersList}>remove all users</button>
    </section>
  );
};

export default Task05;
