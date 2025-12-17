import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import "./home.css";

function Home() {
  const [isLight, setToggle] = useLocalStorage("theme", true);

  useEffect(() => {
    document.body.className = isLight ? "light-theme" : "dark-theme";
  }, [isLight]);

  return (
    <>
      {/* toggle themes */}
      <div className="container">
        <div className="localStorage">
          <h2>useLocalStorage</h2>
          <button
            type="button"
            onClick={() => setToggle((prevState) => !prevState)}
          >
            Toggle Theme
          </button>
          {isLight ? <p>Light Theme</p> : <p>Dark Theme</p>}
        </div>
      </div>
    </>
  );
}

export default Home;
