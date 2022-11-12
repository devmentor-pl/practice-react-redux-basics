import React, { useState } from 'react';
import Subject from './../src/libs/Subject';

const subject = new Subject();

const Task01 = () => {
    const [time, setTime] = useState(0);
    const [tagName, setTagName] = useState('??');
    const [cursorPosition, setCursorPosition] = useState('[?,?]');

    const functions = [
        ({ timeStamp }) => setTime(parseInt(timeStamp / 1000)),
        ({ target }) => setTagName(target.tagName),
        ({ pageX, pageY }) => setCursorPosition(`[${pageX},${pageY}]`),
    ]

    functions.forEach(f => subject.subscribe(f));

    return (
        <section>
            <h1>Task 1</h1>

            <div onClick={ event => {
                subject.notify(event);
            }}>
                <p>
                    <strong>Kliknij wybrany element:</strong> <a>link</a>, <button>button</button>, <span>span</span>
                </p>


                <ul>
                    <li>time: { time }s</li>
                    <li>tagName: { tagName }</li>
                    <li>position: { cursorPosition }</li>
                </ul>
            </div>
        </section>
    )
}

export default Task01;

