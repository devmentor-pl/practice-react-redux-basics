import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

class UserList extends React.Component {
	state = {
		user: '',
	};

	handleChange = e => {
		this.setState({ user: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { user } = this.state;

		if (user.trim()) {
			this.props.onAddUser(user);
			this.setState({ user: '' });
		}
	};
	render() {
		const { users } = this.props;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input value={this.state.user} onChange={this.handleChange} />
						<input type='submit' value='dodaj' />
					</div>
				</form>

				<ul>
					{users.map(u => (
						<UserItem key={u.id} id={u.id} name={u.name} />
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

const mapActionToProps = dispatch => ({
	onAddUser: name => dispatch({ type: 'addUser', payload: name }),
});

export default connect(mapStateToProps, mapActionToProps)(UserList);
