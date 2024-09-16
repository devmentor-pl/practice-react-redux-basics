import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../actions';

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch();
    
    const handleClick = event => {
        event.preventDefault();
        dispatch(removeUser(id))
    }
    return (
        <li>{name} <button onClick={handleClick}>usuń</button></li>
    )
}

export default UserItem;