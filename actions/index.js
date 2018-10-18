import * as category from "./CategoryActions";
import * as country from "./CountryActions";
import * as news from "./newsActions";
import * as resource from "./ResourceActions";
import * as settings from "./SettingsActions";

export const actions = {
  ...category,
  ...country,
  ...news,
  ...resource,
  ...settings
};
