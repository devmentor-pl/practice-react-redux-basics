import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { addUser } from './actions'

const mapStateToProps = (state) => ({
    users: state.users.users
});

class UserList extends React.Component {
    state = { newUser: '' };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state.newUser);
        this.setState({ newUser: '' });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.newUser} onChange={(e) => this.setState({ newUser: e.target.value})}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {this.props.users.map(user => <UserItem key={user.id} id={user.id} name={user.name} />)}
                </ul>
            </>
        )
    }
}

export default connect(mapStateToProps, { addUser })(UserList);