
import React from 'react';
import UserItem from './UserItem';
import uuid from 'react-uuid'
import {connect} from 'react-redux'
import { addUser } from '../actions';

 
class UserList extends React.Component {

    constructor(props) {
        super(props)
        this.input = React.createRef();
    }

    state = {
		name: '',
    };

     // nie wiem co jest lepsze to co jest czyli ref , czy moze to -> ?czy nie ma rozniccy?
    // handleValue = e => {
    //     this.setState({ name: e.target.value });
    // };

    handleSubmit = e => {
        e.preventDefault()
        const id = uuid()
       
        this.props.addAction({user: this.input.current.value, id})
        this.input.current.value = ''
    }





    
    render() {
        const { users } = this.props;
        const { user } = this.state;
        return (
            <>
                <form>
                    <div>
                        <input 
                        placeholder="Enter name"
                        // onChange={(e) => this.handleValue(e)}
                        ref={this.input}
						value={user}
                        />
                        <input type="submit" value="dodaj" onClick={(e) => this.handleSubmit(e)}/>
        
                    </div>
                </form>

                <ul>

                    <UserItem/>
                      {users.map(user => {
                         return (
                          <UserItem
                           key={user.id}
                           id={user.id} 
                          name={user.user} />
                                             
                      )})}  
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
   addAction: addUser
}


export default connect(mapStateToProps, mapActionToProps)(UserList);


