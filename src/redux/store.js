import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import usersReducer from "./reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
