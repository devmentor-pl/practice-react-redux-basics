import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux'
import { addUser } from '../actions'



class UserList extends React.Component {
    state = {
        userName: '',
    }


    handleSubmit = e => {
        const { userName } = this.state
        const { users } = this.props
        e.preventDefault()

        const ids = users.map(u => u.id)
        this.props.addUser({name: userName, id: ids.length === 1 ? 1 : Math.max(...ids) + 1})
        this.setState({
            userName: '',
        })
    }

    handleChange = e => {
        this.setState({
            userName: e.target.value
        })
    }



    render() {
        const { users } = this.props
        console.log(users);
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.userName} onChange={this.handleChange} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map(u => <UserItem key={u.id} name={u.name} id={u.id}/>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
    }
}

const mapActionToProps = {
    addUser: addUser
}

export default connect(mapStateToProps, mapActionToProps)(UserList);