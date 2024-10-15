import React from 'react';
import UserItem from './UserItem';
import { connect } from "react-redux";
import { addUserAction } from "../store/actions";

class UserList extends React.Component {
  state = {
    name: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.name);
    this.setState({ name: "" });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { users } = this.props;
    const { name } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input value={name} onChange={this.handleChange} />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {users.map((user) => (
            <UserItem key={user.id} name={user.name} id={user.id} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { users: state.users };
};

const mapActionToProps = {
  addUser: addUserAction,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);