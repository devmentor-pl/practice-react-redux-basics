// ./src/app.js
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = { message: "Dziala!", time: new Date(), users: [] };
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "getCurrentTime":
            const newTime = new Date();
            return {
                ...state,
                time: newTime,
            };
        case "addUser":
            const newId = state.users.length + 1;
            const newUser = { user: action.newUser, id: newId };
            return {
                ...state,
                users: [...state.users, newUser],
            };
        case "deleteUser":
            const userId = action.userId;
            return {
                ...state,
                users: state.users.filter((user) => user.id !== userId),
            };
        default:
            return state;
    }
};

export const deleteUser = (userId) => {
    return {
        type: "deleteUser",
        userId: userId,
    };
};

export const addUser = (user) => {
    return {
        type: "addUser",
        newUser: user,
    };
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
