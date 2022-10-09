import React from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { addUser } from "./../action/users";

class UserList extends React.Component {
  state = {
    name: "",
    id: 0,
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      name: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
    this.props.onAdd(this.state);
  };

  render() {
    const { users } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="name"
              onChange={this.handleChange}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {users.map((user) => (
            <UserItem name={user.name} id={user.id} />
          ))}
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
  onAdd: addUser,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);