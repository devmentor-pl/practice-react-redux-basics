import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

const UsersContainer = ({ users }) => {
    return (
        <>
            {users[0] !== []
                ? users.map((user) => (
                      <UserItem name={user.user} id={user.id} key={user.id} />
                  ))
                : ""}
        </>
    );
};

const mapStateToProps = (state) => ({
    users: state.users,
});

export default connect(mapStateToProps, {})(UsersContainer);
