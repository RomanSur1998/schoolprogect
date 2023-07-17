import { applyMiddleware, combineReducers, createStore } from "redux";
import { RegistrReducer } from "./RegistrReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ registr: RegistrReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
