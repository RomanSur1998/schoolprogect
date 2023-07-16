import { applyMiddleware, combineReducers, createStore } from "redux";
import { AuthReducer } from "./AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ auth: AuthReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
