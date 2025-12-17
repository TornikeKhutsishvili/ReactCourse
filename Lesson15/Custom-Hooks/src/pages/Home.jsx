import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./home.css";
import useWindowSize from "../hooks/useWindowSize";

function Home() {
  const device = useWindowSize();
  const [isLight, setToggle] = useLocalStorage("theme", true);
  const mobWidth = device === "MOBILE";

  useEffect(() => {
    if (mobWidth) {
      document.body.className = "light-theme";
    } else {
      document.body.className = isLight ? "light-theme" : "dark-theme";
    }
  }, [mobWidth, isLight]);

  return (
    <>
      {/* toggle themes */}
      <div className="container">
        <div className="localStorage">
          <h2>useLocalStorage</h2>

          {/* toggle desktop */}
          {!mobWidth && (
            <button
              type="button"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              Toggle Theme
            </button>
          )}
          {mobWidth && <p>Mobile Light Theme</p>}
          {!mobWidth && isLight && <p>Desktop – Light Theme</p>}
          {!mobWidth && !isLight && <p>Desktop – Dark Theme</p>}
        </div>
      </div>
    </>
  );
}

export default Home;
