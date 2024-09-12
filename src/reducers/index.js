const INITIAL_STATE = {
	message: 'Działa!',
	time: new Date(),
	users: [],
};

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return {
				...state,
				time: new Date(),
			};
		case 'addUser':
			return {
				...state,
				users: [...state.users, action.newUser],
			};
		case 'removeUser':
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.idToRemove),
			};
		case 'removeAll':
			return {
				...state,
				users: [],
			};
		default:
			return state;
	}
};

export default reducer;
