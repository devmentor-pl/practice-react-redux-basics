import React from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { addUserAction } from "../actions/user";

class UserList extends React.Component {
  state = {
    text: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const idList = this.props.users.map((user) => user.id);
    const userData = {
      id: this.props.users.length === 0 ? 0 : Math.max(...idList) + 1,
      username: this.state.text,
    };
    this.props.addUser(userData);
    this.setState({ text: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <input
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>
        <ul>
          {this.props.users.map(({ username, id }) => (
            <UserItem key={id} name={username} id={id} />
          ))}
        </ul>
      </>
    );
  }
}

const mapDispatchToProps = {
  addUser: addUserAction,
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
