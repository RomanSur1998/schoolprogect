import { RegistrState } from "./RegistrReducer";

const defaultState = {
  email: "1",
  password: "1",
};

export interface FormInterface {
  email: string;
  password: string;
}
export interface AuthInterface {
  auth: FormInterface;
}

export const AUTH_EMAIL = "AUTH_EMAIL";
export const AUTH_PASSWORD = "AUTH_PASSWORD";

export const AuthReducer = (state = defaultState, action: RegistrState) => {
  switch (action.payload) {
    case AUTH_EMAIL:
      return { ...state, email: action.payload };
    case AUTH_PASSWORD:
      return { ...state, password: action.payload };

    default:
      return state;
  }
};
