import React from 'react';
import UserItem from './UserItem';
import { connect } from "react-redux";
import { addUserAction } from "./redux/actions";

class UserList extends React.Component {
  state = {
    name: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const { onAdd } = this.props;

    const userName = name.trim();
    if (userName.length < 3) return;

    onAdd(name.trim());
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    const { users } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="user"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {users.map(({ name, id }) => (
            <UserItem name={name} key={id} id={id} />
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
  onAdd: addUserAction,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);