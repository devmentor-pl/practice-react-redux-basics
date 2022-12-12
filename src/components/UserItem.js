import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeChosenUser } from "./actions/actions";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeChosenUser(id));
  };
  return (
    <li>
      {name} <button onClick={handleSubmit}>usuń</button>
    </li>
  );
};

export default UserItem;

