import React from 'react';
import { useDispatch } from "react-redux";
import { removeAllUsers } from "../src/redux/actions";

const Task05 = () => {
	const dispatch = useDispatch();

	const handleRemoveUsers = () => {
		dispatch(removeAllUsers());
	};

	return (
		<section>
			<h1>Task 5</h1>
			<button onClick={handleRemoveUsers}>remove all users</button>
		</section>
	);
};

export default Task05;

