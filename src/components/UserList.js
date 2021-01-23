import React from "react";
import { connect } from "react-redux";
import { addUserAction } from "../actions/users";

import UserItem from "./UserItem";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getNewUserId() {
    const { users } = this.props;

    if (users.length === 0) {
      return 1;
    }

    return Math.max(...this.props.users.map(user => user.id)) + 1;
  }

  handleInputChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { username } = this.state;

    if (username.trim().length > 0) {
      const user = {
        id: this.getNewUserId(),
        username,
      };

      this.props.onUserAdd(user);
    }
  }

  render() {
    const { users } = this.props;
    const { username } = this.state;

    return (
      <>
        <form>
          <div>
            <input value={username} onChange={this.handleInputChange} />
            <input type="submit" value="dodaj" onClick={this.handleSubmit} />
          </div>
        </form>

        <ul>
          {users.map(user => {
            return <UserItem key={user.id} id={user.id} name={user.username} />;
          })}
        </ul>
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
  onUserAdd: addUserAction,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
