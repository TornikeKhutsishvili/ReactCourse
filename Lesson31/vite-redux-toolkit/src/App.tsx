import React, { Suspense } from "react";
import Router from "./router/Router";

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
};

export default App;
