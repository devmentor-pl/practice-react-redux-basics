import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { addUser } from './../actions';

class UserList extends React.Component {
    state = {
        userName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { userName } = this.state
        const { users } = this.props

        const idList = users.map(user => user.id)

        this.props.addUser({
            name: userName,
            id: idList.length === 0 ? 1 : Math.max(...idList) + 1 
        })

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
                        <input 
                            value={this.state.userName}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map(user => 
                        <UserItem
                            key={user.id}
                            name={user.name}
                            id={user.id}
                        />    
                    )}
                </ul>
            </>
        )
    }
}

const mapActionToProps = {
    addUser: addUser
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users
    }
}

export default connect(
    mapStateToProps, mapActionToProps
)(UserList);
