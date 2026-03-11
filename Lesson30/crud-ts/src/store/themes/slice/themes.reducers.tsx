import type { CaseReducer } from "@reduxjs/toolkit";

export const toggleTheme: CaseReducer = (state) => {
  state.theme = state.theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", state.theme);
};

export const setLight: CaseReducer = (state) => {
  state.theme = "light";
  localStorage.setItem("theme", "light");
};

export const setDark: CaseReducer = (state) => {
  state.theme = "dark";
  localStorage.setItem("theme", "dark");
};