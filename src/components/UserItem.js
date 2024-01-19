import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/actions';

const UserItem = ({name, id}) => {
    const dispatch = useDispatch();

    return (
        <li>
            {name} <button onClick={() => dispatch(removeUser(id))}>Usuń</button>
        </li>
    )
}

export default UserItem;