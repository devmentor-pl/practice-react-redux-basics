import React from 'react';
import UserItem from './UserItem';

import { connect } from 'react-redux';
import { addUser } from '../actions/users';

class UserList extends React.Component {
    state = {
        user: '',
        error: ''
    }

    changeHandler = (e) => {
        this.setState({ user: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        let error = ''

        const { user } = this.state

        if (user.trim().length === 0) {
            error = 'Pole nie może być puste!'
            this.setState({
                error: error
            })
        }

        if (!error) {
            this.props.onAddUser(user)
            this.setState({ error: '' })
        }

        this.setState({ user: '' })
    }

    renderUsers = () => {
        const { users } = this.props

        return users.map(user => <UserItem key={user.id} name={user.name} id={user.id} />)
    }

    render() {
        const { error } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input onChange={this.changeHandler} value={this.state.user} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                {error && <p style={{ color: 'red' }}>{error}</p>}

                <ul>
                    {this.renderUsers()}
                </ul>
            </>
        )
    }
}

const mapActionToProps = {
    onAddUser: addUser
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, mapActionToProps)(UserList);