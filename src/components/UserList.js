import React from 'react';
import UserItem from './UserItem';
import { useSelector} from 'react-redux';
import {addUser} from '../actions/users'
import {connect} from 'react-redux';


class UserList extends React.Component {
    constructor(){
        super();
        this.state = {
            newUser: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewUser(this.state.newUser);
        this.setState({
            newUser: '',
        })
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.handleChange} name="newUser" value={this.state.newUser} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {this.props.users.map((user) => <UserItem name={user.name} key={user.id} id={user.id}/>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state,props) => {
    return {
        users: state.users
    }
}

const mapActionToProps = {
    addNewUser: addUser,
}

export default connect(mapStateToProps,mapActionToProps)(UserList);