import { RegistrState } from "./RegistrReducer";

const defaultState = {
  email: "example@com",
};

export const RECOVERY_EMAIL = "RECOVERY_EMAIL";
export const RecoveryReducer = (state = defaultState, action: RegistrState) => {
  switch (action.type) {
    case RECOVERY_EMAIL:
      return { ...state, email: action.payload };

    default:
      return state;
  }
};
