import React from 'react';
import {removeUser} from './actions'
import {useDispatch} from 'react-redux'

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(removeUser(id))
    }
    return (
        <li>{name} <button onClick={onClick}>usuń</button></li>
    )
}

export default UserItem;