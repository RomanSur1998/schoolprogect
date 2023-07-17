import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_PASSWORD,
  CHANGE_SECONDNAME,
} from "../store/RegistrReducer";

export const ChangeName = (payload: string) => ({
  type: CHANGE_NAME,
  payload: payload,
});
export const ChangeSecondName = (payload: any) => ({
  type: CHANGE_SECONDNAME,
  payload: payload,
});
export const ChangeEmail = (payload: any) => ({
  type: CHANGE_EMAIL,
  payload: payload,
});
export const ChangePassword = (payload: any) => ({
  type: CHANGE_PASSWORD,
  payload: payload,
});
