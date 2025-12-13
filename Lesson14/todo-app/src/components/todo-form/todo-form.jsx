import { useEffect, useState } from "react";
import State from "../state";

function TodoForm() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const update = () => forceUpdate(v => v + 1);

    State.subscribe(update);
    console.log("useEffect - State.subscribe - in TodoForm");

    return () => {
      State.unsubscribe(update);
    };
  }, []);

  const handleChange = (e) => {
    State.setExerciseValue(e.target.value);
    console.log("change handleChange - in TodoForm");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    State.addExercise();
    console.log("submit handleSubmit - in TodoForm");
  };

  const { exerciseValue } = State.getState();

  return (
    <div className="todo-form-container">
      <div className="container">
        <h1 className="title my-2">Form</h1>

        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mt-2 w-100"
            value={exerciseValue}
            onChange={handleChange}
            placeholder="Enter exercise..."
          />

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
}

export default TodoForm;
