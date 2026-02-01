import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
  name: "themes",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setLight: (state) => {
      state.theme = "light";
      localStorage.setItem("theme", "light");
    },
    setDark: (state) => {
      state.theme = "dark";
      localStorage.setItem("theme", "dark");
    },
  },
});

export const { toggleTheme, setLight, setDark } = themeSlice.actions;
export const themeSelector = (state) => state.themes.theme;

export default themeSlice.reducer;
