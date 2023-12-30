import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import UserItem from './UserItem';
import { addUserAction } from '../actions/actions';
import { connect } from 'react-redux';

class UserList extends React.Component {
  state = {
    userName: '',
  };

  handleInputChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userName } = this.state;
    if (userName.trim() !== '') {
      const newUser = {
        id: uuidv4(),
        name: userName,
      };
      this.props.addUser(newUser);
      this.setState({ userName: '' });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleInputChange}
            />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          {this.props.users.map((users) => (
            <UserItem key={users.id} {...users} />
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUserAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
