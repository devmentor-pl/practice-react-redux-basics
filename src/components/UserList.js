import React from 'react';
import UserItem from './UserItem';
import { addUser } from "../redux/actions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

class UserList extends React.Component {
	state = {
		inputValue: "",
	};

	handleInputChange = e => {
		this.setState({ inputValue: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const { users } = this.props;
		const { inputValue } = this.state;

		const newUser = {
			name: inputValue,
			id: uuid(),
		};

		this.props.addUser(newUser);
		this.setState({
			inputValue: "",
		});
	};

	render() {
		const { users } = this.props;

		const usersList = users.map(item => {
			return <UserItem key={item.id} id={item.id} name={item.name} />;
		});

		return (
			<>
				<form onSubmit={e => this.handleSubmit(e)}>
					<div>
						<input
							value={this.state.inputValue}
							onChange={this.handleInputChange}
						/>
						<input type='submit' value='dodaj' />
					</div>
				</form>

				<ul>{usersList}</ul>
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.users,
	};
};

const mapActionsToProps = {
	addUser: addUser,
};

export default connect(mapStateToProps, mapActionsToProps)(UserList);