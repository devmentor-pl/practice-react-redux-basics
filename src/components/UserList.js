import React from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { addUser, deleteAll } from "../actions";
import { uuid } from "uuidv4";
class UserList extends React.Component {
  inputRef = React.createRef();

  addUserToList = (event) => {
    event.preventDefault();
    const id = uuid();
    console.log(id);
    this.props.add(this.inputRef.current.value, id);
    this.inputRef.current.value = "";
  };
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <>
        <form onSubmit={this.addUserToList}>
          <div>
            <input ref={this.inputRef} />
            <input type="submit" value="dodaj" />
            <button
              onClick={(e) => {
                e.preventDefault();
                this.props.delAll();
              }}
            >
              {" "}
              usuń wszystkie
            </button>
          </div>
        </form>

        <ul>
          {users.map((user) => {
            return (
              <UserItem
                name={user.name}
                id={user.id}
                key={user.id.toString()}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

const mapActionToProps = {
  add: addUser,
  delAll: deleteAll,
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
