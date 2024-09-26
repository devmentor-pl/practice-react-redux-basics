import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './actions';
import UserItem from './UserItem';

class UserList extends React.Component {
    state = { user: '' };

    handleSubmit = e => {
        e.preventDefault();
        const id = this.props.users.length
        const { user } = this.state
        this.props.addUser(user, id),
        this.setState({ user: '' })

    };

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input onChange={e=>this.setState({user:e.target.value})} value={this.state.user} />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {this.props.users.map((user) => (<UserItem name={user.name} key={user.id} id={user.id}/>))}
                </ul>
            </>
        )
    }
}

const mapActionToProps = {
    addUser: addUser
};

const mapStateToProps = (state, props) => {
    return {
        users: state.users
    }
};


export default connect(mapStateToProps, mapActionToProps)(UserList);