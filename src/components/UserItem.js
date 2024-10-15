import React from 'react';
import { useDispatch } from "react-redux";
import { removeUserAction } from "../store/actions";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(removeUserAction(id));
  };
  return (
    <li>
      {name} <button onClick={handleClick}>usuń</button>
    </li>
  );
};

export default UserItem;