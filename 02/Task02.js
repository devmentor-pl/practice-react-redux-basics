import React from 'react';
import { useStore, useSelector } from 'react-redux'; 

const Task02 = () => {

    const messageText = useSelector(state => state.message.message);

    return (
        <section>
            <h1>Task 2</h1>
            
            <div>{ messageText }</div>
        </section>
    );
}

export default Task02;

