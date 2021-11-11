import { createStore } from "redux";
import reducer from "./users/duck/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

export default store;
