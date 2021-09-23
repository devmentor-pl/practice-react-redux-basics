import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "./../action/users";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

    const { id } = event.target.parentElement.dataset;
    const usersId = users.filter((user) => {
      if (Number(id) !== user.id) {
        return user;
      }
    });
    dispatch(deleteUser(usersId));
  };

  return (
    <li data-id={id}>
      {name} <button onClick={handleClick}>usuń</button>
    </li>
  );
};

export default UserItem;





