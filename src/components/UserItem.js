import React from 'react';
import { deleteUser } from "../libs/actions";
import { useDispatch } from "react-redux";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const dispatch = useDispatch();

  const handleDeleteButton = () => {
    dispatch(deleteUser(id));
  };

  return (
    <li>
      {name} <button onClick={handleDeleteButton}>usuń</button>
    </li>
  );
};

export default UserItem;