import React from 'react';
import { removeUser } from '../actions/users';
import { useDispatch } from 'react-redux';

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch()
    return (
        <li>{name} <button onClick={() => dispatch(removeUser(id))}>usuń</button></li>
    )
}

export default UserItem;