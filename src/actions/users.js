export const addUserAction = (newUser) => {
	return {
		type: 'addUser',
		newUser,
	};
};

export const removeUserAction = (idToRemove) => {
	return {
		type: 'removeUser',
		idToRemove,
	};
};
