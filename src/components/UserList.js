import React from 'react';
import UserItem from './UserItem';
import { connect } from "react-redux";
import { addUser } from "../actions/useractions";
import { v4 as uuid } from "uuid";

class UserList extends React.Component {
  state = { user: "" };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const id = this.props.users.length;
    this.props.onAddUser(user, id);
    console.log(user);
    this.setState({ user: " " });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.user}
            onChange={(e) => {
              this.setState({ user: e.target.value });
            }}
          />
          <input type="submit" value="Dodaj" />
        </form>
        <ul>
          {this.props.users.map((user) => (
            <UserItem name={user.name} id={user.id} key={uuid()} />
          ))}
        </ul>
      </>
    );
  }
}

const mapActionToProps = {
  onAddUser: addUser,
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapActionToProps)(UserList);

