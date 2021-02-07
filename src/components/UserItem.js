import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from './actions'

const UserItem = ({name = 'Default Name', id = -1}) => {

    const dispatch = useDispatch();

    const handleDelete = e => {
     dispatch(deleteUserAction(id));
    }

    return (
        <li>{name} <button onClick={handleDelete}
        >usuń</button></li>
    )
}

export default UserItem;