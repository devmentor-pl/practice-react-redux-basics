import React from 'react';
import UserItem from './UserItem';
import { addNewUser } from "./actions";
import { connect } from "react-redux";

class UserList extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(e.target.children[0].children[0].value);
    e.target.children[0].children[0].value = "";
  };
  render() {
    const { users } = this.props;
    const list = users.map((n) => {
      return <UserItem name={n.name} id={n.id} key={n.id} />;
    });
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="userName" />
            <input type="submit" value="dodaj" />
          </div>
        </form>
        <ul>{list}</ul>
      </>
    );
  }
}

const mapActionToProps = {
  onAdd: addNewUser,
};

export default connect(null, mapActionToProps)(UserList);