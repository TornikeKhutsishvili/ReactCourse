import { useEffect, useState } from "react";
import State from "../state";
import "./Todo-progress.css";
import { useLanguage } from "../../context/LanguageContext";

function TodoProgress() {
  const [, forceUpdate] = useState(0);
  const { translations } = useLanguage();

  useEffect(() => {
    const update = () => forceUpdate((v) => v + 1);

    State.subscribe(update);
    console.log("useEffect - State.subscribe - in TodoDone");

    return () => {
      State.unsubscribe(update);
    };
  }, []);

  const backTodo = (id) => {
    State.markNotDone(id);
    console.log("click backTodo in TodoDone");
  };

  const onDelete = (id) => {
    State.removeExercise(id);
    console.log("click onDelete in TodoDone");
  };

  const { exercises } = State.getState();
  const done = exercises.filter((ex) => ex.done);

  const borderColors = [
    "border-primary",
    "border-success",
    "border-warning",
    "border-danger",
  ];

  return (
    <div className="todo-done-container my-4">
      <div className="container">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-header fw-bold inProgress-header">
            {translations.todoProgress.InProgress} | {done.length}
          </div>

          <div className="card-body p-0">
            <table className="table table-striped mb-0">
              <tbody>
                {done.length > 0 ? (
                  done.map((ex, index) => (
                    <tr
                      key={ex.id}
                      className={`w-100 d-flex flex-wrap flex-direction-column align-items-center table-tr ${
                        borderColors[index % borderColors.length]
                      }`}
                    >
                      <td className="text-start w-100">{ex.exercise}</td>
                      <td className="text-end w-100">
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => backTodo(ex.id)}
                        >
                          {translations.todoProgress.BackToTodo}
                        </button>

                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => onDelete(ex.id)}
                        >
                          {translations.todoProgress.Delete}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center text-muted">
                      {translations.todoProgress.Noprogresstasks}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoProgress;
