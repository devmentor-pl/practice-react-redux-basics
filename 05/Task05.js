import React from 'react';
import removeUsersAction from '../src/actions/userList';

const Task05 = () => {
    const dispatch = useDispatch()
    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={() => dispatch(removeUsersAction())}>remove all users</button>
        </section>
    );
}

export default Task05;

