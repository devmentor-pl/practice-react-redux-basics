import React from 'react';
import { useDispatch } from 'react-redux'
import actions from '../src/app/data/duck/actions'

const Task05 = () => {
	const dispatch = useDispatch()
	const removeUsers = () => dispatch(actions.removeAllUsers())

	return (
		<section>
			<h1>Task 5</h1>
			<button onClick={removeUsers}>remove all users</button>
		</section>
	)
}

export default Task05

