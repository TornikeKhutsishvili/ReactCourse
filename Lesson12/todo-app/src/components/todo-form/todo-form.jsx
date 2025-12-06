import { Component } from "react";
import State from "../state";

class TodoForm extends Component {

  onChange = (event) => {
    State.setExerciseValue(event.target.value);
    this.forceUpdate();
  };

  addExercise = (event) => {
    event.preventDefault();
    State.addExercise();
    this.forceUpdate();
    this.props.onUpdate();
  };

  render() {
    return (
      <div className="todo-form-container">
        <div className="container">
          <h1 className="title my-2">Form</h1>
          <form className="form-group" onSubmit={this.addExercise}>
            <input
              type="text"
              className="form-control mt-2 w-100"
              value={State.state.exerciseValue}
              onChange={this.onChange}
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
