import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./theme.state";
import { toggleTheme, setLight, setDark } from "./themes.reducers";

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: { toggleTheme, setLight, setDark },
});

export const { toggleTheme: toggleThemeAction, setLight: setLightAction, setDark: setDarkAction } = themeSlice.actions;
export default themeSlice.reducer;