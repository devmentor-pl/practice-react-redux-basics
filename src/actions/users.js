export const addUser = user => {
	return {
		type: "addUser",
		payload: {
			user: user,
		},
	};
};

export const removeUser = id => {
	return {
		type: "removeUser",
		payload: {
			id: id,
		},
	};
};
