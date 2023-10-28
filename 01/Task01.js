import React, { useState } from 'react';
import Subject from './../src/libs/Subject';

const Task01 = () => {
    const [time, setTime] = useState(0);
    const [tagName, setTagName] = useState('??');
    const [cursorPosition, setCursorPosition] = useState('[?,?]');

    const setEventTime = ({ timeStamp }) => {
			setTime(parseInt(timeStamp / 1000));
		};

		const setEventTagName = ({ target }) => {
			setTagName(target.tagName);
		};

		const setEventCursorPosition = ({ pageX, pageY }) => {
			setCursorPosition(`[${pageX},${pageY}]`);
		};

		const subject = new Subject();

		const subscriber1 = data => console.log(`sub1 -> ${data}`);
		subject.subscribe(subscriber1);

		const subscriber2 = data => console.log(`sub2 -> ${data}`);
		subject.subscribe(subscriber2);

		const notifySubscribers = () => {
			subject.notify(`time: ${time}s, tagName: ${tagName}, position: ${cursorPosition}`);
		};
		return (
			<section>
				<h1>Task 1</h1>

				<div
					onClick={event => {
						setEventTime(event);
						setEventTagName(event);
						setEventCursorPosition(event);
						notifySubscribers();
					}}
				>
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
		);
}

export default Task01;

