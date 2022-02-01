import React from 'react';
import {useDispatch} from 'react-redux';
import {removeUser} from './../actions/users';

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch();
    const handleButton = (e) =>{
        e.preventDefault;
        dispatch(removeUser(id))
    }


    return (
        <li>{name} <button onClick={handleButton}>usuń</button></li>
    )
}

export default UserItem;