import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { addUser } from '../actions/userActions';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const name = this.state.inputValue.trim();
        if (!name) return;
        this.props.addUser(name);
        this.setState({ inputValue: '' });
    }

    render() {
        const { users } = this.props;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map(user => (
                        <UserItem key={user.id} id={user.id} name={user.name} />
                    ))}
                </ul>
            </>
        );
    }
}

const mapStateToProps = ({ users }) => ({ users });

const mapDispatchToProps = dispatch => ({
    addUser: name => dispatch(addUser(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);