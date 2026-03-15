import { useSelector } from "react-redux";
import { useEffect } from "react";
import { themeSelector } from "../store/themes/slice/themes.slice";

export const useThemeSelector = () => {
  const theme = useSelector(themeSelector);

  useEffect(() => {
    const body = document.body;
    if (theme === "dark") {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    }
  }, [theme]);

  return { theme };
};