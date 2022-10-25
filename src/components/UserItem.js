import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const deleteUser = () => {
    const actualUsers = users.filter((user) => user.id !== id);
    dispatch({ type: "deleteUser", payload: actualUsers });
  };
  
  return (
    <li>
      {name} <button onClick={deleteUser}>usuń</button>
    </li>
  );
};

export default UserItem;
