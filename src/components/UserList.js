import React from 'react';
import {connect} from 'react-redux'
import UserItem from './UserItem';

const mapStateToProps = (state, props) => {
    return {
        users: state.users,
    }
}
const mapActionToProps = {
    addUser: addUserAction,
}

function addUserAction(newUser) {
    return {
        type: 'addUser',
        payload: {newUser: newUser}
    }
}

class UserList extends React.Component {
    state = {
        user: '',
        usersIDs: []
    }

    handleOnChange = (e) => {
        this.setState({user: e.target.value})
    }
    
    handleAddUser = (e) => {
        e.preventDefault();
        const id = this.setID();
        if(this.state.user === '') {
            alert('Wpisz nazwę użytkownika.')
        } else {
            this.props.addUser({userName: this.state.user, id})
            this.setState({user: ''})
        }
    }
    
    setID = () => {
        const IDsGroup = this.state.usersIDs;
        const id = IDsGroup.length !== 0 ? Math.max(...IDsGroup) + 1 : 0;
        this.setState({usersIDs: [...IDsGroup, id]});
        return id
    }

    removeID = (idToRemove) => {
        const IDsGroup = this.state.usersIDs;
        console.log(idToRemove)
    }

    render() {
        return (
            <>
                <form onSubmit={e => this.handleAddUser(e)}>
                    <div>
                        <input onChange={e => this.handleOnChange(e)} value={this.state.user}/>
                        <input type="submit" value="dodaj"/>
                    </div>
                </form>

                <ul>
                    {this.props.users.map(user => <UserItem key={user.id} id={user.id} name={user.userName} onRemove={this.removeID}/> )}
                </ul>
            </>
        )
    }
}


export default connect(mapStateToProps, mapActionToProps)(UserList);