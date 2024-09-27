import React, { useState } from 'react';
import Subject from './../src/libs/Subject';

const Task01 = () => {
    const [time, setTime] = useState(0);
    const [tagName, setTagName] = useState('??');
    const [cursorPosition, setCursorPosition] = useState('[?,?]');

    // const [event, setEvent] = useState(null)

    const subject = new Subject()

    const setEventTime = ({ timeStamp }) => {
        setTime(parseInt(timeStamp / 1000));
    }
    subject.subscribe(setEventTime)

    const setEventTagName = ({ target }) => {
        setTagName(target.tagName);
    }
    subject.subscribe(setEventTagName)

    const setEventCursorPosition = ({ pageX, pageY }) => {
        setCursorPosition(`[${pageX},${pageY}]`);
    }
    subject.subscribe(setEventCursorPosition)

    // console.log(event)
    console.log(subject.observersList)


    return (
        <section>
            <h1>Task 1</h1>

            <div onClick={event => {
                setEventTime(event);
                setEventTagName(event);
                setEventCursorPosition(event);

                // setEvent(event)
                subject.notify(event)
            }}>
                <p>
                    <strong>Kliknij wybrany element:</strong> <a>link</a>, <button>button</button>, <span>span</span>
                </p>


                <ul>
                    <li>time: {time}s</li>
                    <li>tagName: {tagName}</li>
                    <li>position: {cursorPosition}</li>
                </ul>
            </div>
        </section>
    )
}

export default Task01;

