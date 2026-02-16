import type React from "react";
import { useState } from "react";

const Batching: React.FC = () => {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("A");

  console.log("Batching component rendered");

  const updateState = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then(() => {
        setValue((prev) => prev + 1);
        setState((prev) => prev + "A");
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => console.log("Fetch operation completed"));
  };

  return (
    <div>
      <h1>{value}</h1>
      <h1>{state}</h1>
      <button type="button" onClick={updateState}>
        Click
      </button>
    </div>
  );
};

export default Batching;
