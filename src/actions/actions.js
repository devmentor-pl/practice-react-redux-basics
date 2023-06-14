export const addUserAction = (user) => {
	return {
		type: 'addUser',
		payload: {
			user
		}
	};
};

export const removeUserAction = (id) => {
	return {
		type: 'removeUser',
		payload: {
			id
		}
	}
}

export const removeAllUsersAction = () => {
	return {
		type: 'removeUsers',
	}
}