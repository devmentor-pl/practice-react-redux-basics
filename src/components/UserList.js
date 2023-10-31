import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux'

function addUser(data) {
    return {
        type: 'addUser',
        payload: {data: data}
    }
}

class UserList extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { userName } = this.state
        const { users, addUser } = this.props
        const usersIds = users.map(u => u.id)
        console.log(usersIds)
        addUser({name: userName, id: usersIds.length === 0 ? 1 : Math.max(...usersIds) + 1})
        this.setState({
            userName: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    render() {
        const { users } = this.props
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.userName} onChange={this.handleChange}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                   {users.map(user => <UserItem key={user.id} name={user.name} id={user.id}/> )}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapActionToProps = {
    addUser: addUser
}

export default connect(mapStateToProps, mapActionToProps)(UserList);