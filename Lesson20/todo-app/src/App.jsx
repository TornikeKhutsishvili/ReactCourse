import "./App.css";
import Header from "./layout/header/Header.jsx";
import MainRoutes from "./mainRoutes/MainRoutes.jsx";
import Footer from "./layout/footer/Footer.jsx";
import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { themeStyles } = useTheme();

  return (
    <>
      <div
        style={{
          backgroundColor: themeStyles.background,
          color: themeStyles.text,
          minHeight: "100vh",
        }}
      >
        <Header />
        <MainRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
