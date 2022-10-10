import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../actions/users';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
  const dispatch = useDispatch();

  const removeTargetUser = () => {
    dispatch(removeUser(id));
  };

  return (
    <li>
      {name} <button onClick={removeTargetUser}>usuń</button>
    </li>
  );
};

export default UserItem;
