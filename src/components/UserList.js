import React from 'react';
import { connect } from 'react-redux';

import { addUserAction } from './actions/users';
import UserItem from './UserItem';

class UserList extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			nextUserId: 1,
		};
	}
	inputHandler = e => {
		this.setState({ inputValue: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const { inputValue, nextUserId } = this.state;
		const newUser = {
			name: inputValue,
			id: nextUserId,
		};

		this.setState(prevState => ({
			inputValue: '',
			nextUserId: prevState.nextUserId + 1,
		}));
		console.log(this.props.users);
		this.props.addUser(newUser);
	};
	render() {
		return (
			<>
				<form>
					<div>
						<input onChange={this.inputHandler} value={this.state.inputValue} />
						<input onClick={this.handleSubmit} type='submit' value='dodaj' />
					</div>
				</form>

				<ul>
					{this.props.users.map(user => (
						<UserItem key={user.id} name={user.name} id={user.id} />
					))}
				</ul>
			</>
		);
	}
}
const mapStateToProps = (state, props) => {
	return {
		users: state.users,
	};
};

const mapActionToProps = {
	addUser: addUserAction,
};
export default connect(mapStateToProps, mapActionToProps)(UserList);