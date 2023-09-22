import React from 'react';
import { useDispatch } from 'react-redux';

import { resetUsersListAction } from '../src/actions/user';

const Task05 = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetUsersListAction());
    };

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleClick}>remove all users</button>
        </section>
    );
};

export default Task05;
