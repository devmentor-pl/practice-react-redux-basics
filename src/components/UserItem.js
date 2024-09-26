import React from 'react';
import { deleteUser } from './actions';
import { useDispatch } from 'react-redux';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteUser(id))
    };

    return (
        <li>{name} <button onClick={handleClick}>usuń</button></li>
    )
}

export default UserItem;