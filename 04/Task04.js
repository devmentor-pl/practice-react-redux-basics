import React from 'react';
import UserList from './../src/components/UserList';
import { useSelector, useDispatch } from "react-redux";

const Task04 = () => {
  const users = useSelector(({ users = null }) => users);
  return (
    <section>
      <h1>Task 4</h1>

      <UserList users={users} />
    </section>
  );
};

export default Task04;

