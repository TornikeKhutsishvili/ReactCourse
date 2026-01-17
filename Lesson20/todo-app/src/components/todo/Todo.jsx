import { useEffect, useState } from "react";
import State from "../state";
import "./Todo.css";
import { useLanguage } from "../../context/LanguageContext";

function ToDo() {
  const [, forceUpdate] = useState(0);
  const { translations } = useLanguage();

  useEffect(() => {
    const update = () => forceUpdate((v) => v + 1);

    State.subscribe(update);

    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${
        State.getState().exercises.length || 10
      }`,
    )
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.map((todo) => ({
          id: todo.id,
          exercise: todo.title,
          done: false,
        }));

        State.mergeFetchedData(formatted);
        console.log("Fetched and merged todo data");
      })
      .catch((err) => console.error(err));

    console.log("useEffect in ToDo");

    return () => {
      State.unsubscribe(update);
    };
  }, []);

  const handleDone = (id) => {
    State.markDone(id);
    console.log("click handleDone in TodoItem");
  };

  const handleDelete = (id) => {
    State.removeExercise(id);
    console.log("click handleDelete in TodoItem");
  };

  const { exercises } = State.getState();
  const active = exercises.filter((ex) => !ex.done);

  const borderColors = [
    "border-primary",
    "border-success",
    "border-warning",
    "border-danger",
  ];

  return (
    <div className="todo-container my-4">
      <div className="container">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-header fw-bold todo-header">
            {translations.todo.Backlog} | {exercises.length}
          </div>

          <div className="card-body p-0">
            <table className="table table-striped mb-0">
              <tbody>
                {active.map((ex, index) => (
                  <tr
                    key={ex.id}
                    className={`w-100 d-flex flex-wrap flex-direction-column align-items-center table-tr ${
                      borderColors[index % borderColors.length]
                    }`}
                  >
                    <td className="text-start w-100">{ex.exercise}</td>
                    <td className="text-end w-100">
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleDone(ex.id)}
                        disabled={ex.done}
                      >
                        {translations.todo.done}
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(ex.id)}
                      >
                        {translations.todo.delete}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
