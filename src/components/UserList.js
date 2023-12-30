import React from 'react';
import { connect } from "react-redux";

import UserItem from './UserItem';
import { addUserAction } from "../actions/users";

class UserList extends React.Component {
  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleAddNewUser = (e) => {
    e.preventDefault();
    const { inputValue } = this.state;

    if (inputValue.length > 0) {
      this.props.addUser(this.getNewUserData(inputValue));
      this.clearInput();
    } else {
      alert("Please enter a value");
    }
  };

  getNewUserData = (inputValue) => {
    const { users } = this.props;
    const newUserName = inputValue;
    const newUserId = this.findBiggestIdInUsers(users) + 1;

    return { userName: newUserName, id: newUserId };
  };

  findBiggestIdInUsers = (array) =>
    array.length > 0 ? Math.max(...array.map((item) => item.id)) : -1;

  clearInput = () => {
    this.setState({
      inputValue: "",
    });
  };

  render() {
    const { inputValue } = this.state;
    const { users } = this.props;

    const userItems = users.map(({ userName, id }) => (
      <UserItem key={id} name={userName} id={id} />
    ));

    return (
      <>
        <form onSubmit={this.handleAddNewUser}>
          <div>
            <input value={inputValue} onChange={this.handleChange} />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>{userItems}</ul>
      </>
    );
  }
}

const mapStateToProps = (state, props) => ({ users: state.users });

const mapActionToProps = {
  addUser: addUserAction,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);