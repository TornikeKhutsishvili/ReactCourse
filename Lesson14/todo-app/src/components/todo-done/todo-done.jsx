import { useEffect, useState } from "react";
import State from "../state";

function TodoDone() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const update = () => forceUpdate(v => v + 1);

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
  const done = exercises.filter(ex => ex.done);

  return (
    <div className="todo-done-container my-4">
      <div className="container">
        <div className="card shadow-sm border-0 rounded-3">
          <div className="card-header bg-success text-white fw-bold">
            Todo Done
          </div>

          <div className="card-body p-0">
            <table className="table table-striped mb-0">
              <tbody>
                {done.length > 0 ? (
                  done.map(ex => (
                    <tr key={ex.id}>
                      <td>{ex.exercise}</td>
                      <td className="text-end">
                        <button className="btn btn-warning btn-sm me-2" onClick={() => backTodo(ex.id)}>
                          Back Todo
                        </button>

                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(ex.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center text-muted">
                      No completed tasks
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

export default TodoDone;
