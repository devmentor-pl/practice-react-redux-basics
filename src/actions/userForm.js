export const addUserAction = name => {
	return {
		type: 'addUser',
		payload: name,
	};
};

export const removeUserAction = id => {
	return {
		type: 'removeUser',
		payload: id,
	};
};

export const removeAllUsersAction = () => {
	return {
		type: 'removeAllUsers',
	};
};
