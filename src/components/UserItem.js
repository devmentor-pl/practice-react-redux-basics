import React from "react";
import { useDispatch } from "react-redux";
import { removeUserAction } from "../actions/users";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeUserAction(id));
  };

  return (
    <li>
      {name} <button onClick={handleRemove}>usuń</button>
    </li>
  );
};

export default UserItem;
