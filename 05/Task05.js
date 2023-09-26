import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllUsers } from '../src/actions/actions';

const Task05 = () => {
    const dispatch = useDispatch()
    return (
        <section>
            <h1>Task 5</h1>
            <button
                onClick={() => dispatch(deleteAllUsers())}
            >
                remove all users
            </button>
        </section>
    );
}

export default Task05;

