const initState = {
	message: 'Działa!',
	time: new Date(),
	users: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return {
				...state,
				time: new Date(),
			};
		case 'addUser':
			return {
				...state,
				users: [...state.users, action.payload.newUser],
			};
		case 'removeUser':
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			};
		default:
			return state;
	}
};

export default reducer;
