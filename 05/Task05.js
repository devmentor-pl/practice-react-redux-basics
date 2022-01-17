import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../src/app/tasks/duck/actions';

const Task05 = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <h1>Task 5</h1>
      <button onClick={() => dispatch(actions.removeAllUsers())}>
        remove all users
      </button>
    </section>
  );
};

export default Task05;
