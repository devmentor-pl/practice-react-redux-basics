import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const Task05 = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const handleClearUsers = () => {
        dispatch({ type: 'clear_users' })
    }
    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleClearUsers}>remove all users</button>
        </section>
    );
}

export default Task05;

