import { useDispatch } from "react-redux";
import { useThemeSelector } from "../../hooks/useThemeSelector";
import { toggleThemeAction } from "../../store/themes/slice/themes.slice";

const ThemeSwitcher = () => {
  const { theme } = useThemeSelector();
  const dispatch = useDispatch();

  const themeToggle = () => {
    dispatch(toggleThemeAction())
  }

  return (
    <button type="button" onClick={themeToggle} className="btn btn-sm btn-outline-secondary" title="Toggle theme">
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;