import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../actions';

const UserItem = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => {
        const { users } = state;
        const list = users.map((user, i) => <li key={ i }>{ user.user } <button onClick={ () => dispatch(removeUser(user.id)) }>usuń</button></li>);
        return list;
    });
    return users;
}


export default UserItem;

