import { Component } from "react";
import TodoForm from "../todo-form/todo-form";
import TodoDone from "../todo-done/todo-done";
import ToDo from "../todo/todo";

class TodoList extends Component {

  forceAll = () => {
    this.forceUpdate();
  };

  render() {
    return (
      <div className="todo-list-container py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">My To-Do List</h2>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="p-3 bg-white border rounded shadow-sm h-100">
                <TodoForm onUpdate={this.forceAll} />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 bg-white border rounded shadow-sm h-100">
                <ToDo onUpdate={this.forceAll} />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 bg-white border rounded shadow-sm h-100">
                <TodoDone onUpdate={this.forceAll} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default TodoList;
