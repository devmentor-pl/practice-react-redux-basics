import React from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';

import { addUserAction } from '../actions';

class UserList extends React.Component {
    state = {
        inputValue: ''
    }

    generateId = () => {
        if (this.props.users.length === 0) return 1;
        return Math.max(...this.props.users.map(user => user.id)) + 1;
    };

    render() {
        return (
            <>
                <form onSubmit={(ev) => {
                    ev.preventDefault();
                    const id = this.generateId();
                    this.props.onSubmit(this.state.inputValue, id);
                    this.setState({ inputValue: '' });
                }}>
                    <div>
                        <input onChange={(ev) => {
                            this.setState({ inputValue: ev.target.value })
                        }} value={this.state.inputValue}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {this.props.users.map((el) => {
                        return <UserItem key={el.id} name={el.name} id={el.id} />
                    })}
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users,
    }
}

const mapActionToProps = {
    onSubmit: addUserAction,
}

export default connect(
    mapStateToProps,
    mapActionToProps
)(UserList);