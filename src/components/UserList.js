import React from 'react';
import UserItem from './UserItem';
import {connect } from 'react-redux';
import {addUser} from './../actions/users';

class UserList extends React.Component {
    state = {inputValue: ''}

    getValue = e => {
        e.persist();
        this.setState(()=> {
            return {inputValue: e.target.value}
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        const {inputValue} = this.state;
        this.props.onSubmit(inputValue);
        this.userRef.value='';
    }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input ref={el => this.userRef=el} onChange={this.getValue}/>
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