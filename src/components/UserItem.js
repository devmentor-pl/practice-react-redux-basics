import React from "react";
import { useDispatch } from "react-redux";
import { removeUserAction } from "./redux/actions";

const UserItem = ({ name = "Default Name", id = -1 }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {name}
      <button onClick={() => dispatch(removeUserAction(id))}>usuń</button>
    </li>
  );
};

export default UserItem;
