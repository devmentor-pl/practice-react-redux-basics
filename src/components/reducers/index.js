const initialState = {
	message: 'działa',
	time: new Date(),
	users: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return { ...state, time: new Date() };
		case 'addUser':
			return { ...state, users: [...state.users, action.payload.name] };
			case 'removeUser':
				return {...state, users: state.users.filter(user => user.id !== action.payload)};
		default:
			return state;
	}
};
export default rootReducer;
