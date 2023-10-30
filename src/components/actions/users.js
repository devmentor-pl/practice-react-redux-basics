export const addUserAction = (user, id) => {
	return {
		type: 'addUser',
		payload: {
			name: user,
			id: id,
		},
	};
};
export const removeUserAction = id => {
	return {
		type: 'removeUser',
		payload: id,
	};
};
