import React from "react";
import "./styles/App.css";
import Router from "./router/Router";
import { AuthContextProvider } from "./contexts/authContext";

const App: React.FC = () => {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
};

export default App;
