import { Component } from "react";
import State from "../state";

class TodoDone extends Component {

  onDelete = (id) => {
    State.removeExercise(id);
    this.props.onUpdate();
  };

  backTodo = (id) => {
    State.markNotDone(id);
    this.props.onUpdate();
  }

  render() {
    const done = State.state.exercises.filter((ex) => ex.done);

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
                  {done.map((ex) => (
                    <tr key={ex.id}>
                      <td>{ex.exercise}</td>
                      <td className="text-end">
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => this.backTodo(ex.id)}
                        >
                          Back Todo
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => this.onDelete(ex.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {done.length === 0 && (
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

}

export default TodoDone;
