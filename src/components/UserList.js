import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { addUser } from '../actions/users.js';

class UserList extends React.Component {
  state = { userName: '' };

  inputHandler = (e) => {
    e.persist();
    this.setState(() => {
      return { userName: e.target.value };
    });

    console.log(this.state.userName);
  };

  submitUser = (e) => {
    e.preventDefault();
    const { userName } = this.state;
    this.props.add(userName);
    this.state.userName = '';
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitUser}>
          <div>
            <input value={this.state.userName} onChange={this.inputHandler} />
            <input type='submit' value='dodaj' />
          </div>
        </form>
        <ul>
          {/* {this.props.users.map((item) => (
            <UserItem key={item.id} name={item.name} id={item.id} />
          ))} */}
          {this.props.users.map((item) => (
            <UserItem key={item.id} name={item.name} id={item.id} />
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
  add: addUser,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
