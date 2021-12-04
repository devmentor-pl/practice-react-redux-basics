import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { addUser } from './../actions';

class UserList extends React.Component {
    state = { user: '' };

    handleInput = ({ value }) => {
        this.setState({ user: value });
    };

    getNextId = () => {
        const idList = this.props.users.map((user) => user.id);
        return idList.length > 0 ? Math.max(...idList) + 1 : 0;
    };

    handleAddUser = (e) => {
        e.preventDefault();
        const id = this.getNextId();
        this.props.addUser({ name: this.state.user, id });
        this.state.user = '';
    };

    render() {
        return (
            <>
                <form onSubmit={(e) => this.handleAddUser(e)}>
                    <div>
                        <input
                            value={this.state.user}
                            onChange={(e) => this.handleInput(e.target)}
                        />
                        <input type='submit' value='dodaj' />
                    </div>
                </form>

                <ul>
                    {this.props.users.map(({ name, id }) => {
                        return <UserItem key={id} name={name} id={id} />;
                    })}
                </ul>
            </>
        );
    }
}

const mapActionToProps = {
    addUser,
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
