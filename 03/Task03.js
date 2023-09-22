import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import types from '../src/duck/types';

const Task03 = () => {
    const time = useSelector(({ time = null }) => time);
    const dispatch = useDispatch();

    return (
        <section>
            <h1>Task 3</h1>
            <div>
                <time>{time ? time.toLocaleTimeString() : '00:00:00'}</time>
                <button onClick={() => dispatch({ type: types.GET_CURRENT_TIME })}>get current time</button>
            </div>
        </section>
    );
};

export default Task03;
