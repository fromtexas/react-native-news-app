import { SETTINGS_UPDATED } from "./types";

export const settingsUpdated = status => ({
  type: SETTINGS_UPDATED,
  payload: status
});
