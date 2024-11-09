import React from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { addUser } from "./../actions";


class UserList extends React.Component {
  state = {
    userName: "",
  };

  handleChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const { userName } = this.state;
    const { users, addUser } = this.props;
    event.preventDefault();

    const ids = users.map((user) => user.id);

    addUser({
      name: userName,
      id: ids.length === 0 ? 1 : Math.max(...ids) + 1,
    });
    this.setState({
      userName: "",
    });
  };
  render() {
    const { users } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input value={this.state.userName} onChange={this.handleChange} />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {users.map((user) => {
            return <UserItem key={user.id} name={user.name} id={user.id} />;
          })}
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
