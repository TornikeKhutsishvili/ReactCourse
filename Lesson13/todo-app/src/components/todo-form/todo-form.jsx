import { Component } from "react";
import State from "../state";

class TodoForm extends Component {
  componentDidMount() {
    State.subscribe(() => this.forceUpdate());
    console.log("componentDidMount - State.subscribe - in ToDoForm");
  }

  handleChange = (e) => {
    State.setExerciseValue(e.target.value);
    console.log("click (changed) handleChange - in ToDoForm");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    State.addExercise();
    console.log("click (submited) handleSubmit - in ToDoForm");
  };

  render() {
    return (
      <div className="todo-form-container">
        <div className="container">
          <h1 className="title my-2">Form</h1>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="form-control mt-2 w-100"
              value={State.state.exerciseValue}
              onChange={this.handleChange}
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
}

export default TodoForm;
