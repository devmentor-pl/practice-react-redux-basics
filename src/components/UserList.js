import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import {addUser} from '../store'

class UserList extends React.Component {
    state = {
        value: '',
        id: null
    }
    onInput = e => {
        const value = e.target.value 
        this.setState({ value: value });
    }
    onSubmit = e => {
        e.preventDefault()
        const {_addUser} = this.props
        const valueInput = this.state.value
        if(valueInput) {
            _addUser(valueInput)
            this.setState({ value: '' });
        }
    }
    render() {
        const users = this.props.users
        const {value} = this.state

        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input value={value} onChange={this.onInput}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    {
                        users.map(user => {
                            const {id, name} = user
                            return(
                                <UserItem 
                                    id={id} name={name}
                                />                                
                            )
                        })
                    }

                </ul>
            </>
        )
    }
}
const mapStateToProps = state => ({
    users: state.users
})
const mapDispatchToProps = dispatch => ({
    // _addUser: value => dispatch({type: 'ADD_USER', payload: {name: value}})
    _addUser: value => dispatch(addUser(value))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList)