const initialState = {
	message: 'Działa!',
	time: null,
	users: [],
};

const reducers = (state = initialState, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return { ...state, time: new Date() };

		case 'addUser':
			const { user } = action.payload;
			return { ...state, users: [...state.users, user] };

		case 'deleteUser':
			const { id } = action.payload;
			return {
				...state,
				users: state.users.filter((user) => user.id !== id),
			};

		default:
			return state;
	}
};

export default reducers;
