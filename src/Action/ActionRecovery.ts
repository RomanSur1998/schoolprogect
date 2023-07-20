import { RECOVERY_EMAIL } from "../store/RecoveryReducer";

export const RecoveryAction = (payload: string) => ({
  type: RECOVERY_EMAIL,
  payload: payload,
});
