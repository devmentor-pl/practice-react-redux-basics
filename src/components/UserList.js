import React from 'react';

import UserItem from "./UserItem";
import { connect } from "react-redux";
import { addUser } from "../libs/actions";

class UserList extends React.Component {
  state = { user: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.users.length;
    const { user } = this.state;
    this.props.addUser(user, id);
    this.setState({ user: "" });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              value={this.state.user}
              onChange={(e) => this.setState({ user: e.target.value })}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>
        <ul>
          {this.props.users.map((user) => (
            <UserItem name={user.name} key={user.id} id={user.id}></UserItem>
          ))}
        </ul>
      </>
    );
  }
}
const mapActionToProps = {
  addUser: addUser,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapActionToProps)(UserList);