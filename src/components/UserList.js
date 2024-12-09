import React from 'react';
import UserItem from './UserItem';
import { connect } from "react-redux";
import { addUser } from "../actions";


class UserList extends React.Component {
  state = {
    userName: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const ids = this.props.users.map((user) => user.id);
    this.props.addUser({
      name: this.state.userName,
      id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
    });
  };

  handleChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input onChange={this.handleChange} value={this.state.userName} />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {this.props.users.map((user) => (
            <UserItem key={user.id} name={user.name} id={user.id} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapActionToProps = {
  addUser: addUser,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);