import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteUser } from '../actions/'

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch()
    const handleSubmit = event => {
        event.preventDefault()
        dispatch( deleteUser(id) )
    }

    return (
        <li>{name} <button onClick={ handleSubmit }>usuń</button></li>
    )
}

export default UserItem;