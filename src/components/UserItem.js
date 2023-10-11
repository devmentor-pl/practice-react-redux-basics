import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteUser} from '../state/reducer'

const UserItem = ({name = 'Default Name', id = -1}) => {
    const dispatch = useDispatch()
    const delUser = id => {
        console.log('id', id)
        // dispatch({type: 'DEL_USER', payload: {id}})
        dispatch(deleteUser( id ))
    }
    return (
        <li>{name} <button onClick={() => delUser(id)}>usuń</button></li>
    )
}

export default UserItem;