import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { addNewUser } from './../actions/index';

class UserList extends React.Component {
    state = {
        user: ''
    }

    addUser = (e, user) => {
        e.preventDefault();
        this.props.add(user);
        this.setState({ user: '' })
    }

    render() {
        return (
            <>
                <form onSubmit={ e => this.addUser(e, this.state.user) }>
                    <div>
                        <input 
                            value={ this.state.user }
                            onChange={ ({ target }) => this.setState({ user: target.value } )}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    <UserItem />
                </ul>
            </>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        usersList: state.users
    }
}

const mapActionToProps = {
    add: addNewUser
}

export default connect(mapStateToProps, mapActionToProps)(UserList);