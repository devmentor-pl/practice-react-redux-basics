import React from 'react';
import UserItem from './UserItem';
import { addNewUser } from '../actions/actions';
import { connect } from 'react-redux';

class UserList extends React.Component {
    render() {
        return (
            <>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        this.props.onAddUser(e.target.newName.value)
                    }}
                >
                    <div>
                        <input name='newName' />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {
                        this.props.users.map((user, index) => {
                            return (
                                <UserItem name={user} key={index} id={index}/>
                            ) 
                        })
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users
    }
}

const mapActionToProps = {
    onAddUser: addNewUser
}

export default connect(mapStateToProps, mapActionToProps)(UserList);