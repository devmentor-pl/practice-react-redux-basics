import React from "react";
import UserItem from "./UserItem";
import UsersContainer from "./UsersContainer";
import { addUser } from "../app";

class UserList extends React.Component {
    state = { user: "" };

    handleChange(e) {
        this.setState({ user: e.target.value });
    }

    reset() {
        this.setState({ user: "" });
    }

    render() {
        return (
            <>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        store.dispatch(addUser(this.state.user));
                        this.reset();
                    }}
                >
                    <div>
                        <input
                            value={this.state.user}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <input type="submit" value="dodaj" />
                    </div>
                </form>

                <ul>
                    <UsersContainer />
                </ul>
            </>
        );
    }
}

export default UserList;
