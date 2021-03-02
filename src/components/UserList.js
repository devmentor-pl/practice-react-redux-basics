import React from 'react';
import { connect } from 'react-redux'
import UserItem from './UserItem';
import { addUser } from '../actions/'

class UserList extends React.Component {
    nameRef = React.createRef()

    submitHandler = (event) =>{
        event.preventDefault()
        const name = this.nameRef.current.value

        this.props.onAddUser(name)
        this.nameRef.current.value = ''
    }
    render() {
        const userItems = this.props.users.map(user => <UserItem key={user.id} { ...user }/>)
        
        return (
            <>
                <form onSubmit={ this.submitHandler }>
                    <div>
                        <input ref={ this.nameRef} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {userItems}
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
        users: state.users,
    } 
}

export default connect(mapStateToProps, mapActionToProps)(UserList)
