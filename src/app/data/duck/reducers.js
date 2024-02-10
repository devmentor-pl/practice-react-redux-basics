import types from './types'

const INITIAL_STATE = {
	message: 'Działa!',
	time: new Date(),
	users: [],
}

const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.GET_TIME:
			return {
				...state,
				time: new Date(),
			}
		case types.ADD_USER:
			return { ...state, users: [...state.users, action.item] }
		case types.REMOVE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== action.id),
			}
		case types.REMOVE_ALL:
			return { ...state, users: [] }
		default:
			return state
	}
}

export default reducer
