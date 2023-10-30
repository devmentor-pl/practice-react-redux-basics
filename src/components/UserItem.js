import React from 'react';

const UserItem = ({ name = 'Default Name', id = -1, handleDelete }) => {
	const onDeleteClick = id => {
		handleDelete(id);
	};

	return (
		<li id={id}>
			{name}
			<button onClick={() => onDeleteClick(id)}>usuń</button>
		</li>
	);
};

export default UserItem;