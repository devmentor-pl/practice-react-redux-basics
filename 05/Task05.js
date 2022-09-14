import React from 'react';
import {useDispatch} from 'react-redux'
import {deleteAll} from '../src/state/reducer'

const Task05 = () => {
    const dispatch = useDispatch()

    const delAllUsers = () => {
        // dispatch({type: 'DEL_ALL'})
        dispatch(deleteAll)
    }

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={delAllUsers}>remove all users</button>
        </section>
    );
}

export default Task05;

