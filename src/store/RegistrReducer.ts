const defaultState = {
  // name: "1",
  // secondName: "1",
  email: "1",
  password: "1",
  confirm_password: "1",
};

interface RegistrInterface {
  // name: string;
  // secondName: string;
  email: string;
  password: string;
  confirm_password: string;
}
export interface StateInteface {
  registr: RegistrInterface;
}
export interface RegistrState {
  type: string;
  payload: any;
}

export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_SECONDNAME = "CHANGE_SECONDNAME";
export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_PASSWORD = "CHANGE_PASSWORD";
export const CONFIRM_PASSWORD = "CONFIRM_PASSWORD";

export const RegistrReducer = (state = defaultState, action: RegistrState) => {
  switch (action.type) {
    // case CHANGE_NAME:
    //   return { ...state, name: action.payload };
    // case CHANGE_SECONDNAME:
    //   return { ...state, secondName: action.payload };
    case CHANGE_EMAIL:
      return { ...state, email: action.payload };
    case CHANGE_PASSWORD:
      return { ...state, password: action.payload };
    case CONFIRM_PASSWORD:
      return { ...state, confirm_password: action.payload };
    default:
      return state;
  }
};
