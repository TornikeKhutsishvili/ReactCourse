import "./App.css";

import { lazy, Suspense } from "react";
// import Batching from "./components/Batching";
// import ConCurrency from "./components/ConCurrency";
import Form from "./components/Form";

const ConCurrency = lazy(() => import("./components/ConCurrency"));

const App = () => {
  return (
    <>
      {/* <Batching /> */}

      {/* ConCurrency */}
      <Suspense fallback={<div>Loading...</div>}>
        <ConCurrency />
      </Suspense>

      {/* Form */}
      <Form />
      <Form />
      <Form />
      <Form />
    </>
  );
};

export default App;
