import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

import { addUserAction } from '../actions/user';

class UserList extends React.Component {
    state = {
        userInput: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.addUser(this.state.userInput);
        this.setState({ userInput: '' });
    };

    handleChange = e => {
        this.setState({ userInput: e.target.value });
    };

    render() {
        const { userInput } = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} value={userInput} />
                        <input type='submit' value='dodaj' />
                    </div>
                </form>

                <ul>
                    <UserItem />
                    {this.props.users.map(({ id, name }) => (
                        <UserItem key={id} id={id} name={name} />
                    ))}
                </ul>
            </>
        );
    }
}

const mapActionToProps = {
    addUser: addUserAction,
};

const mapStateToProps = (state, props) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
