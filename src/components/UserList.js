import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import { addUser } from '../actions/actions';

class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }
    handleChange = event => {
        this.setState({input: event.target.value})
    }
    handleSubmit = (event) => {
        const {add, users} = this.props
        event.preventDefault();
        const newUser = event.target[0].value

        if(newUser.length > 0){
            if(users.length === 0){
                add(newUser, 1)
            }else{
                const ids = users.map(element => element.id);
                add(newUser, Math.max(...ids) + 1 )
            }
            this.setState({input: ''})
        }
    }

    render() {
        const {users} = this.props
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input value={this.state.input} onChange={this.handleChange}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {users.map(element => (
                        <UserItem 
                            key={element.id} 
                            name={element.name} 
                            id={element.id}
                        />
                    ))}
                </ul>
            </>
        )
    }
}

const mapActionToProps = {
    add: addUser
}

const mapStateToProps = (state, props) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, mapActionToProps) (UserList);