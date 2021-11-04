// ./src/app.js
import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

const initState = { message: "Dziala!", time: new Date() };
const reducer = (state = initState, action) => {
    switch (action.type) {
        case "getCurrentTime":
            const newTime = new Date();
            return {
                ...state,
                time: newTime,
            };
        default:
            return state;
    }
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
