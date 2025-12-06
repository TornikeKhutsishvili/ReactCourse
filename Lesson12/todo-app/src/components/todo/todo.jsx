import { Component } from "react";
import TodoItem from "./todo-item/todo-item";
import State from "../state";

class ToDo extends Component {

  render() {
    const active = State.state.exercises.filter((ex) => !ex.done);

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
                  {active.map((ex) => (
                    <TodoItem
                      key={ex.id}
                      id={ex.id}
                      exercise={ex.exercise}
                      onDone={this.props.onUpdate}
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

}

export default ToDo;
