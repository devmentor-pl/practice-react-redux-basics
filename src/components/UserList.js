import React, {useState} from 'react';
import UserItem from './UserItem';
import {useDispatch, connect } from 'react-redux';
import {addUser} from './../actions/users';

class UserList extends React.Component {
    state = {inputValue: ''}

    getValue = e => {
        e.persist();
        this.setState(()=> {
            return {inputValue: e.target.value}
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        const {inputValue} = this.state;
        return this.props.onSubmit(inputValue)
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={this.getValue}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>
                <ul> 
                    {this.props.users.map((item) => <UserItem key={item.id} name={item.name} id={item.id}/>)}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users,
    }
}

const mapActionToProps = {
    onSubmit: addUser,
}

export default connect(mapStateToProps, mapActionToProps)(UserList);