import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux'
import { addUser } from './../actions';

class UserList extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = (event) => {
        const { userName } = this.state;
        const { users } = this.props;
        event.preventDefault();

        const ids = users.map(u => u.id);
        this.props.addUser({ name: userName, id: ids.length === 0 ? 1 : Math.max(...ids) + 1 });
        this.setState({
            userName: '',
        })
    }

    handleChange = (event) => {
        this.setState({
            userName: event.target.value,
        })
    }
    render() {
        const { users } = this.props;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.userName} onChange={this.handleChange} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map(u => <UserItem key={u.id} name={u.name} id={u.id} />)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapActionToProps = {
    addUser: addUser
}

export default connect(mapStateToProps, mapActionToProps)(UserList);