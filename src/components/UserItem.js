import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../app/tasks/duck/actions';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <li>
      {name}
      <button onClick={() => dispatch(actions.deleteUser(id))}>usuń</button>
    </li>
  );
};

export default UserItem;
