import React from 'react';
import UserItem from './UserItem';
import {connect} from 'react-redux';
import {addUserAction} from '../actions/actions';

const mapActionToProps = {
	userAdd: addUserAction
};
const mapStateToProps = (state, props) => {
	return {
		users: state.users
	};
};

class UserList extends React.Component {
	constructor() {
		super();
		this.state = {
			usersName: ''
		};
	}

	setUserID = () => {
		const {users} = this.props;

		if (users.length === 0) {
			return 1;
		}

		return Math.max(...users.map((user) => user.id)) + 1;
	};

	handleUserInputChange = (e) => {
		this.setState({usersName: e.target.value});
	};

	handleSubmit = e => {
		e.preventDefault();
		const {usersName} = this.state;

		if (usersName.trim().length > 0) {
			const user = {
				id: this.setUserID(),
				usersName
			};
			this.props.userAdd(user);
			this.setState({usersName: ''});
		} else {
			alert('Please add user! ');
		}
	};

	render() {
		const {users} = this.props;
		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input type="text" value={this.state.usersName} onChange={this.handleUserInputChange}/>
						<input type="submit" value="dodaj"/>
					</div>
				</form>

				<ul>
					{
						users.length !== 0 ? users.map((user) => <UserItem key={user.id} id={user.id} name={user.usersName}/>) :
							<p>Add user</p>
					}
				</ul>
			</>
		);
	}
}

export default connect(mapStateToProps, mapActionToProps)(UserList);