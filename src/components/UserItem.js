import React from "react";

const UserItem = ({ name = "Default Name", id = -1, dispatch }) => {
  const removeUser = (e) => {
    e.preventDefault();
    dispatch({ type: "removeUser", payload: id });
  };
  return (
    <li>
      {name} <button onClick={removeUser}>usuń</button>
    </li>
  );
};

export default UserItem;
