import React from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux'
import { addUser } from './actions';

class UserList extends React.Component {

    state = {
        user: ''
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state.user, this.props.users.length)
        this.setState({user: ''})
    } 

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={(e) => this.setState({user: e.target.value})} value={this.state.user}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {this.props.users.map((user) => <UserItem name={user.name} id={user.id} key={user.id}/>)}
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

export default connect(mapStateToProps, mapActionToProps)(UserList);