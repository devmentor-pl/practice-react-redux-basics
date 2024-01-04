import React from 'react';
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/actions";

const UserItem = ({ name = "Default Name", id = -1 }) => {
	const dispatch = useDispatch();

	const handleRemoveUser = e => {
		e.preventDefault();
		dispatch(removeUser(id));
	};

	return (
		<li>
			{name} <button onClick={handleRemoveUser}>usuń</button>
		</li>
	);
};

export default UserItem;