import types from './types'

const getTime = () => ({
	type: types.GET_TIME,
})

const addUser = (name, id) => ({
	type: types.ADD_USER,
	item: { name, id },
})

const removeUser = id => ({
	type: types.REMOVE_USER,
	id,
})

const removeAllUsers = () => ({
	type: types.REMOVE_ALL,
})

export default { getTime, addUser, removeUser, removeAllUsers }
