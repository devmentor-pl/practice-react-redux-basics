export function getCurrentTime() {
	return {
		type: 'getCurrentTime',
	};
}

export function addUser(newUser) {
	return {
		type: 'addUser',
		payload: { newUser: newUser },
	};
}

export function removeUser(id) {
	return {
		type: 'removeUser',
		payload: id,
	};
}

export function removeAllUsers() {
	return {
		type: 'removeAllUsers',
	};
}
