import React from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class UserList extends React.Component {
  state = {
    newUserName: "",
  };

  addUser = (e) => {
    e.preventDefault();
    this.props.dispatch({
      type: "addUser",
      payload: this.state.newUserName,
    });

    this.setState({ newUserName: "" });
  };
  handleInputChange = (e) => this.setState({ newUserName: e.target.value });

  render() {
    return (
      <>
        <form onSubmit={this.addUser}>
          <div>
            <input
              value={this.state.newUserName}
              onChange={this.handleInputChange}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {this.props.users.map((user) => (
            <UserItem
              dispatch={this.props.dispatch}
              key={user.id}
              id={user.id}
              name={user.name}
            />
          ))}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  users: state.users,
});
export default connect(mapStateToProps)(UserList);
