const initState = {
	message: 'Działa!',
	time: new Date(),
	users: [],
};

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return { ...state, time: new Date() };

		case 'addUser':
			const maxId = state.users.length > 0 ? Math.max(...state.users.map(u => u.id)) : 0;

			const newUser = {
				id: maxId + 1,
				name: action.payload,
			};

			return { ...state, users: [...state.users, newUser] };

		case 'removeUser':
			const newUsers = state.users.filter(user => user.id !== action.payload);
			return { ...state, users: newUsers };

		case 'removeAllUsers':
			return { ...state, users: [] };

		default:
			return state;
	}
};

export default reducer;
