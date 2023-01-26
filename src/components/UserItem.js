import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../actions/actions';

const UserItem = ({name = 'Default Name', id = -1}) => {
    const user = useSelector(state => state.users.filter(user => user.id === id)[0]);
    const dispatch = useDispatch();
    
    const clickHandler = event => {
        event.preventDefault();
        dispatch(removeUser(user.id))
    }
    return (
        <li>{name} <button onClick={clickHandler}>usuń</button></li>
    )
}

export default UserItem;