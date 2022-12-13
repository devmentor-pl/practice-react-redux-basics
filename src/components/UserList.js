import React from 'react';
import UserItem from './UserItem';
import { addNewUser, removeEntireList } from "./actions/actions";
import { connect } from "react-redux";

class UserList extends React.Component {
  state = {
    inputName: "",
  };

  inputChange = (e) => {
    this.setState({
      inputName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let { inputName } = this.state;
    this.props.onAdd(inputName);
    this.setState({ inputName: "" });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log("usuń listę");
    this.props.onRemove();
  };
  render() {
    const { inputName } = this.state;
    const { users } = this.props;
    const list = users.map((n) => {
      return <UserItem name={n.name} id={n.id} key={n.id} />;
    });
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              name="inputName"
              value={inputName}
              onChange={this.inputChange}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>
        <ul>{list}</ul>
        <button onClick={this.handleClick}>usuń wszystko</button>
      </>
    );
  }
}

const mapActionToProps = {
  onAdd: addNewUser,
  onRemove: removeEntireList,
};

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, mapActionToProps)(UserList);