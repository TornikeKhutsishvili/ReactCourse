import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector, toggleTheme } from "../store/themes/themes.slice";

const ThemeSwitcher = () => {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

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

  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
      className="btn btn-sm btn-outline-secondary"
      title="Toggle theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;
