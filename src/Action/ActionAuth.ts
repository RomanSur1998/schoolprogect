import { AUTH_EMAIL, AUTH_PASSWORD } from "../store/AuthReducer";

export const authEmailAction = (payload: any) => ({
  type: AUTH_EMAIL,
  payload: payload,
});
export const authPasswordAction = (payload: any) => ({
  type: AUTH_PASSWORD,
  payload: payload,
});
