import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  CHANGE_SECONDNAME,
  CONFIRM_PASSWORD,
} from "../store/RegistrReducer";

export const ChangeName = (payload: string) => ({
  type: CHANGE_NAME,
  payload: payload,
});
export const ChangeSecondName = (payload: string) => ({
  type: CHANGE_SECONDNAME,
  payload: payload,
});
export const ChangeEmail = (payload: string) => ({
  type: CHANGE_EMAIL,
  payload: payload,
});
export const ChangePassword = (payload: string) => ({
  type: CHANGE_PASSWORD,
  payload: payload,
});
export const ConfirmPassword = (payload: string) => ({
  type: CONFIRM_PASSWORD,
  payload: payload,
});
