import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteHandler = {
    type: 'deleteUser',
    id,
  };

  return (
    <li>
      {name} <button onClick={() => dispatch(deleteHandler)}>usuń</button>
    </li>
  );
};

export default UserItem;
