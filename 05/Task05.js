import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAllUsers } from '../src/redux/actions';

const Task05 = () => {
    const dispatch = useDispatch();

    const handleRemoveAll = () => {
        dispatch(removeAllUsers());
    }

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleRemoveAll}>remove all users</button>
        </section>
    );
}

export default Task05;

