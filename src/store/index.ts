import { applyMiddleware, combineReducers, createStore } from "redux";
import { RegistrReducer } from "./RegistrReducer";
import thunk from "redux-thunk";
import { AuthReducer } from "./AuthReducer";
import { RecoveryReducer } from "./RecoveryReducer";

const rootReducer = combineReducers({
  registr: RegistrReducer,
  auth: AuthReducer,
  recovery: RecoveryReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
