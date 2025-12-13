import { useEffect, useState } from "react";
import TodoItem from "./todo-item/todo-item";
import State from "../state";

function ToDo() {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const update = () => forceUpdate(v => v + 1);

    State.subscribe(update);

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${State.getState().todos}`)
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(todo => ({
          id: todo.id,
          exercise: todo.title,
          done: false,
        }));

        State.mergeFetchedData(formatted);
        console.log("Fetched and merged todo data");
      })
      .catch(err => console.error(err));

    console.log("useEffect in ToDo");

    return () => {
      State.unsubscribe(update);
    };
  }, []);

  const { exercises } = State.getState();
  const active = exercises.filter(ex => !ex.done);

  return (
    <div className="todo-container my-4">
      <div className="container">
        <div className="card shadow-sm border-0 rounded-3">

          <div className="card-header bg-primary text-white fw-bold">
            Todo
          </div>

          <div className="card-body p-0">
            <table className="table table-striped mb-0">
              <tbody>
                {active.map(ex => (
                  <TodoItem
                    key={ex.id}
                    id={ex.id}
                    exercise={ex.exercise}
                    done={ex.done}
                  />
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
