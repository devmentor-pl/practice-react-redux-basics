import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Task03 = () => {
    const time = useSelector(({time = null}) => time);
    const dispatch = useDispatch();

    const handleButton = () => {
        dispatch( {
            type: 'getCurrentTime',
            payload: {
                time:time,
            }
        } )
    }

     return (
        <section>
            <h1>Task 3</h1>
            <div>
                <time>{ time ? time.toLocaleTimeString() : '00:00:00' }</time>
                <button onClick={handleButton}>get current time</button>
            </div>
        </section>
    );
}

export default Task03;

