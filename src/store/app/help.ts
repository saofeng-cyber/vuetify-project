import { ss } from "@saofeng_cyber/pinia-sf-persistence-storage";
export type themeType = "light" | "dark";
export const APP_KEY = "app";
export interface AppState {
  theme: themeType;
  drawerOpen: boolean;
}

export const GET_DEFAULT_SETTTING = (): AppState => {
  return {
    theme: "light",
    drawerOpen: false,
  };
};
export const GET_APP_SETTING = (): AppState => {
  return ss.getItem(APP_KEY) || GET_DEFAULT_SETTTING();
};
