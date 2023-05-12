import React from 'react';
import UserItem from './UserItem';

import { connect } from 'react-redux';
import { addUserAction } from '../actions/users';

class UserList extends React.Component {
	state = { value: '' };

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();

		const { value } = this.state;
		const { users } = this.props;

		if (value.length > 0) {
			this.props.addUser(this.getNewUserData(value, users));
			this.clearInput();
		} else {
			alert('Wpisz nazwę użytkownika!');
		}
	};

	getNewUserData = (userName, usersList) => {
		return { name: userName, id: this.getMaxId(usersList) };
	};

	getMaxId = (array) => {
		return (
			array.reduce((acc, next) => {
				return acc < next.id ? next.id : acc;
			}, 0) + 1
		);
	};

	clearInput = () => {
		this.setState({ value: '' });
	};

	render() {
		const { users } = this.props;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input onChange={this.handleChange} value={this.state.value} />
						<input type='submit' value='dodaj' />
					</div>
				</form>

				<ul>
					{users.map(({ name, id }) => (
						<UserItem key={id} name={name} id={id} />
					))}
				</ul>
			</>
		);
	}
}

const mapActionToProps = {
	addUser: addUserAction,
};

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

export default connect(mapStateToProps, mapActionToProps)(UserList);