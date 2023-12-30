import React from 'react';
import { connect } from 'react-redux';
import { removeUserAction } from '../actions/actions';

const UserItem = ({ name, id, removeUser }) => {
  const handleRemoveClick = () => {
    removeUser(id);
  };
  return (
    <li>
      {name} <button onClick={handleRemoveClick}>usuń</button>
    </li>
  );
};

const mapDispatchToPropsUserItem = (dispatch) => ({
  removeUser: (id) => dispatch(removeUserAction(id)),
});

export default connect(null, mapDispatchToPropsUserItem)(UserItem);
