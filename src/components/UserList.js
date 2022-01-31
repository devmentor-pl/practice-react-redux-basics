import React from 'react';
import UserItem from './UserItem';
import {useDispatch } from 'react-redux';

class UserList extends React.Component {
    constructor() {
        this.dispatch = useDispatch();
    } 

    handleSubmit = e=> {
        e.preventDefault();
        this.dispatch( {
            type: 'onChange',
            payload: { value:e.target.value },

        } )

    }
    
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={dispatchEvent()}/>
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

export default UserList;