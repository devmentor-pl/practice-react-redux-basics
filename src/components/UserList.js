import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

import userActions from '../duck/actions';

class UserList extends React.Component {
    state = {
        userInput: '',
    };

    handleSubmit = e => {
        e.preventDefault();
        userActions.add(this.state.userInput);
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
                    {/* <UserItem /> */}
                    {this.props.users.map(({ id, name }) => (
                        <UserItem key={id} id={id} name={name} />
                    ))}
                </ul>
            </>
        );
    }
}

// const mapActionToProps = {
//     addUser: userActions.add,
// };

const mapStateToProps = (state, props) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, null)(UserList);
