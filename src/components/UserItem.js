import React from 'react';
import userActions from '../duck/actions';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
    const handleClick = id => {
        userActions.remove(id);
    };

    return (
        <li>
            {name} <button onClick={() => handleClick(id)}>usuń</button>
        </li>
    );
};

export default UserItem;
