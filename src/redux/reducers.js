const initialState = {
	message: "Działa!",
	time: null,
	users: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "getCurrentTime":
			return {
				...state,
				time: new Date(),
			};
		case "addUser":
			const { user } = action.payload;
			return {
				...state,
				users: [...state.users, user],
			};
		case "removeUser":
			const { id } = action.payload;
			return {
				...state,
				users: state.users.filter(item => item.id !== id),
			};
		case "removeAllUsers":
			return {
				...state,
				users: [],
			};
		default:
			return state;
	}
};

export default reducer;
