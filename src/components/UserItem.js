import React from "react";
import { deleteUser } from "../actions";
import { connect } from "react-redux";
const UserItem = (props) => {
  const { users, name, id } = props;
  return (
    <li>
      {name}{" "}
      <button
        onClick={(e) => {
          e.preventDefault();
          props.delete(users, id);
        }}
      >
        usuń
      </button>
    </li>
  );
};

const mapActionToProps = {
  delete: deleteUser,
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapActionToProps)(UserItem);
