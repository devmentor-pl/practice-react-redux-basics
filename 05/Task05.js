import React from 'react';

import userActions from '../src/duck/actions';

const Task05 = () => {
    const handleClick = () => {
        userActions.resetList();
    };

    return (
        <section>
            <h1>Task 5</h1>
            <button onClick={handleClick}>remove all users</button>
        </section>
    );
};

export default Task05;
