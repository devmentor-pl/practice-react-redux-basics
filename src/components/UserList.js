import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import actions from '../app/tasks/duck/actions';

class UserList extends React.Component {
  inputRef = React.createRef();

  addUser = (e) => {
    e.preventDefault();
    const id = this.props.users.length;
    this.props.addUser(this.inputRef.current.value, id);
    this.inputRef.current.value = '';
  };

  renderUserItems = () => {
    return this.props.users.map((user) => (
      <UserItem name={user.name} id={user.id} key={user.id} />
    ));
  };

  render() {
    return (
      <>
        <form onSubmit={(e) => this.addUser(e)}>
          <div>
            <input ref={this.inputRef} />
            <input type='submit' value='dodaj' />
          </div>
        </form>

        <ul>{this.renderUserItems()}</ul>
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
  addUser: actions.addUser,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
