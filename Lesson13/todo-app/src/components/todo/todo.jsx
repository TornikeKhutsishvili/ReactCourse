import { Component } from "react";
import TodoItem from "./todo-item/todo-item";
import State from "../state";

class ToDo extends Component {

  componentDidMount() {
    State.loadFromLocalStorage();
    State.subscribe(() => this.forceUpdate());

    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${State.state.todos}`)
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

    console.log("componentDidMount in ToDo");
  }

  render() {
    const active = State.state.exercises.filter(ex => !ex.done);

    return (
      <div className="todo-container my-4">
        <div className="container">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-primary text-white fw-bold">Todo</div>
            <div className="card-body p-0">
              <table className="table table-striped mb-0">
                <tbody>
                  {active.map(ex => (
                    <TodoItem key={ex.id} id={ex.id} exercise={ex.exercise} done={ex.done} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default ToDo;
