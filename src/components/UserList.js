import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

class UserList extends React.Component { 
   state = {
    name: '', 
}
    addUser = (e) => {
        e.preventDefault();
       
        this.setState({ name: ''});

        const newUser = {
            id: this.generateUniqueId(),
            name: this.state.name,
        };

        this.props.dispatch({ type: 'add_user', payload: newUser });

    }
    handleChange  = (e) => {
        const name = e.target.value;
        this.setState({name});
    }
    generateUniqueId() {
        return this.props.users.length + 1;
    } 
    render() {
        return (
            <>
                <form onSubmit={this.addUser}>
                    <div>
                        <input type='text' onChange={this.handleChange} value={this.state.name}/>
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    <UserItem />
                </ul>
            </>
        )
    }

    
}






const mapStateToProps = (state) => {
    return {
      users: state.users || [],
    };
  };
  
  export default connect(mapStateToProps)(UserList);