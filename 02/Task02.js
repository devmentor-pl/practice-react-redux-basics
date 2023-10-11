import React from 'react';
import { useStore, useSelector } from 'react-redux'; 

const Task02 = () => {

    const getMessage = ({message = 'Magazyn nie został zaimplementowany prawidłowo!'}) => {
        return message;
    }

    const message = useSelector(getMessage);
    // const message = useSelector(state => state.message); // only test

    return (
        <section>
            <h1>Task 2</h1>
            
            <div>{ message }</div>
        </section>
    );
}

export default Task02;

