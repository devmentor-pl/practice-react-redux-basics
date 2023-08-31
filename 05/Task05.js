import React from 'react';
import {useDispatch} from 'react-redux';
import {resetUsers} from './../src/actions/users'

const Task05 = () => {
    const dispatch = useDispatch();
    const handleButton = () => {
        dispatch(resetUsers())
    }

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleButton}>remove all users</button>
        </section>
    );
}

export default Task05;

