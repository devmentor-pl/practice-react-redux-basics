import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const removeUserAction = (updatedUsers) => {
	return {
		type: 'removeUser',
		payload: { updatedUsers: updatedUsers },
	};
};

const UserItem = ({ name = 'Default Name', id = -1, onRemove }) => {
	const users = useSelector(state => state.users);
	
	function handleRemove(id) {
		// onRemove(id);
		const updatedUsers = users.filter(user => user.id !== id) // przenieść do App
		useDispatch(removeUserAction(updatedUsers))
	}

	return (
		<li id={id}>
			{name} <button onClick={() => handleRemove(id)}>usuń</button>
		</li>
	);
};

export default UserItem;