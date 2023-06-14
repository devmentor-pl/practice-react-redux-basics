import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { addUserAction } from '../actions/users';

class UserList extends React.Component {
	state = {
		inputValue: '',
	};

	handleSubmit(e) {
		e.preventDefault();
		const { users } = this.props;
		const { inputValue } = this.state;

		const newUser = {
			name: this.state.inputValue,
			id: users.length + 1,
		};

		if (inputValue === '') {
			alert('Please enter your name!');
		} else {
			this.props.addUser(newUser);
		}

		this.setState({ inputValue: '' });
	}

	render() {
		const { users } = this.props;
		const userList = users.map((user) => (
			<UserItem
				key={user.id}
				name={user.name}
				id={user.id}></UserItem>
		));

		return (
			<>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<div>
						<input
							onChange={(e) => this.setState({ inputValue: e.target.value })}
							value={this.state.inputValue}
						/>
						<input
							type='submit'
							value='dodaj'
						/>
					</div>
				</form>

				<ul>{userList}</ul>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
	};
};

const mapActionToProps = {
	addUser: addUserAction,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);