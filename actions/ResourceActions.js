import { BAN_RESOURCE, UNBAN_RESOURCE } from "./types";

export const banResourse = resource => ({
  type: BAN_RESOURCE,
  payload: resource
});

export const unbanResourse = resource => ({
  type: UNBAN_RESOURCE,
  payload: resource
});
