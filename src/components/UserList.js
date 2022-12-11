import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
  handleSubmit = () => {};
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input />
            <input type="submit" value="dodaj" />
          </div>
        </form>

        <ul>
          <UserItem />
        </ul>
      </>
    );
  }
}

export default UserList;