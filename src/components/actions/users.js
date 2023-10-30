export const addUserAction = (user, id) => {
	return {
		type: 'addUser',
		payload: {
			name: user,
			id: id,
		},
	};
};
