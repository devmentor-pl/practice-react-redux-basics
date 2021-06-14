import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserAction } from "./../action/users";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    const { id } = e.target.parentElement.dataset;

    dispatch(deleteUserAction(id));
  };

  return (
    <li data-id={id}>
      {name} <button onClick={handleClick}>usuń</button>
    </li>
  );
};

export default UserItem;
