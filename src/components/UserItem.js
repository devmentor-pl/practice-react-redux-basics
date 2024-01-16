import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const UserItem = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        dispatch({ type: 'delete_user', payload: id })
    }
    return (
        <>
            {users.map((user) => (
                <li key={user.id}>{user.name} <button onClick={() => handleDeleteUser(user.id)}>usuń</button></li>
            ))}
        </>
        
    )
}

export default UserItem;