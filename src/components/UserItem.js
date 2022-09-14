import React from 'react';
import {useDispatch} from 'react-redux'

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch()
    const delUser = id => {
        console.log('id', id)
        dispatch({type: 'DEL_USER', payload: {id}})
    }
    return (
        <li>{name} <button onClick={() => delUser(id)}>usuń</button></li>
    )
}

export default UserItem;