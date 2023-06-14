import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTimeAction } from '../src/actions/time';

const Task03 = () => {
    const time = useSelector(({time = null}) => time);
    const dispatch = useDispatch();

    return (
        <section>
            <h1>Task 3</h1>
            <div>
                <time>{ time ? time.toLocaleTimeString() : '00:00:00' }</time>
                <button onClick={ () => dispatch(getTimeAction())}>get current time</button>
            </div>
        </section>
    );
}

export default Task03;

