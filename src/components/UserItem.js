import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUserAction } from '../actions/user';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
    const dispatch = useDispatch();
    const handleClick = id => {
        dispatch(removeUserAction(id));
    };

    return (
        <li>
            {name} <button onClick={() => handleClick(id)}>usuń</button>
        </li>
    );
};

export default UserItem;
