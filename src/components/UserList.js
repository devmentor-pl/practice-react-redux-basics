import React from 'react';
import UserItem from './UserItem';
import { connect } from "react-redux";
import { addUser } from "../libs/actions";

class UserList extends React.Component {
  state = {
    user: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    const id = Math.random();
    this.props.addUser(this.state.user, id);
    this.setState(() => ({
      user: "",
    }));
  };

  renderUsersList = () => {
    return this.props.users.map((user) => (
      <UserItem name={user.name} id={user.id} key={Math.random()} />
    ));
  };

  render() {
    const { user } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              value={user}
              onChange={(e) => this.setState({ user: e.target.value })}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>{this.renderUsersList()}</ul>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

const mapActionToProps = {
  addUser: addUser,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);