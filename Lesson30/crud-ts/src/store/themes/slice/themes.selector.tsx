export const themeSelector = (state: { themes: { theme: string } }) =>
  state.themes.theme;