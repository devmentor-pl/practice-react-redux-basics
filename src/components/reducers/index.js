const initialState = {
	message: 'działa',
	time: new Date(),
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return { ...state, time: new Date() };
		default:
			return state;
	}
};
export default rootReducer;
