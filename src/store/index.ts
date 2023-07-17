import { applyMiddleware, combineReducers, createStore } from "redux";
import { RegistrReducer } from "./RegistrReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./AuthReducer";

const rootReducer = combineReducers({
  registr: RegistrReducer,
  auth: AuthReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
