import React from 'react';
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../src/actions/'

const Task05 = () => {
    const dispatch = useDispatch()
    const handleSubmit = event => {
        event.preventDefault()
        dispatch( deleteUsers() )
    }

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={ handleSubmit }>remove all users</button>
        </section>
    );
}

export default Task05;

