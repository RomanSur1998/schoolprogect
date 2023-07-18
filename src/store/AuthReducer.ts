import { RegistrState } from "./RegistrReducer";

const defaultState = {
  email: "2",
  password: "2",
};

export interface FormInterface {
  auth: {
    email: string;
    password: string;
  };
}
export interface AuthInterface {
  auth: FormInterface;
}

export const AUTH_EMAIL = "AUTH_EMAIL";
export const AUTH_PASSWORD = "AUTH_PASSWORD";

export const AuthReducer = (state = defaultState, action: RegistrState) => {
  switch (action.type) {
    case AUTH_EMAIL:
      return { ...state, email: action.payload };
    case AUTH_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
