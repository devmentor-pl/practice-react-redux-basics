import React from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';

class UserList extends React.Component {
    render() {
        const users = this.props.users
        console.log( users )
        return (
            <>
                <form>
                    <div>
                        <input />
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
export default connect(mapStateToProps)(UserList)