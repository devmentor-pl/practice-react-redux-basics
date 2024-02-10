import React from 'react';
import { connect } from 'react-redux'
import actions from '../app/data/duck/actions'

const mapDispatchToProps = dispatch => ({
	remove: id => dispatch(actions.removeUser(id)),
})

const UserItem = ({ name = 'Default Name', id = -1, remove }) => {
	const handleRemoveClick = () => {
		remove(id)
	}

	return (
		<li id={id}>
			{name} <button onClick={handleRemoveClick}>usuń</button>
		</li>
	)
}

export default connect(null, mapDispatchToProps)(UserItem)