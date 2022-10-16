import React from 'react';
import { useDispatch } from "react-redux";
import { deleteUser } from "../actions/useractions";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteUser(id));
  };
  return (
    <li>
      {name} <button onClick={handleClick}></button>
    </li>
  );
};

export default UserItem;