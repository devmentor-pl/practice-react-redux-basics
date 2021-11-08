import React from "react";
import UsersContainer from "./UsersContainer";
import { connect } from "react-redux";
import { addUser, reset } from "../users/duck/actions";

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
                        this.props.add(this.state.user);
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

                <button type="button" onClick={() => this.props.reset()}>
                    Delete all users
                </button>
            </>
        );
    }
}

const mapActionToProps = {
    add: addUser,
    reset: reset,
};

export default connect(null, mapActionToProps)(UserList);
