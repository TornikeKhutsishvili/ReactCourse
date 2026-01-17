// import { StrictMode } from 'react'
import "./index.css";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import LanguageProvider from "./context/LanguageContext";
import ThemeProvider from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </LanguageProvider>,
);
