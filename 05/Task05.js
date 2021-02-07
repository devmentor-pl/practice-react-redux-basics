import React from 'react';
import { useDispatch } from 'react-redux';
import {deleteUsersAll} from '../src/components/actions.js'


const Task05 = () => {

    const dispatch = useDispatch();

    const handleDeleteAll = () => {
     dispatch(deleteUsersAll());
    }



    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleDeleteAll}>remove all users</button>
        </section>
    );
}

export default Task05;

