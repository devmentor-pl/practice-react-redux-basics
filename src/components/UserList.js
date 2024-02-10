import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux'

import actions from '../app/data/duck/actions'

const mapStateToProps = state => ({
	users: state.users,
})

const mapDispatchToProps = dispatch => ({
	add: (user, id) => dispatch(actions.addUser(user, id)),
})

class UserList extends React.Component {
	render() {
		const { users } = this.props

		const userInput = React.createRef()

		const addUser = e => {
			e.preventDefault()
			const id = users.length
			this.props.add(userInput.current.value, id)
			userInput.current.value = ''
		}

		return (
			<>
				<form onSubmit={addUser}>
					<div>
						<input ref={userInput} />
						<input type="submit" value="dodaj" />
					</div>
				</form>

				<ul>
					{users.map(user => (
						<UserItem name={user.name} id={user.id} key={user.id} />
					))}
				</ul>
			</>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)