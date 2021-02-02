import React from 'react';
import { useDispatch } from 'react-redux';

const removeUserAction = (id) => {
	return {
		type: 'removeUser',
		payload: id,
	};
};

const UserItem = ({ name = 'Default Name', id = -1 }) => {
	const dispatch = useDispatch();

	return (
		<li id={id}>
			{name}
			<button onClick={() => dispatch(removeUserAction(id))}>usuń</button>
		</li>
	);
};

export default UserItem;