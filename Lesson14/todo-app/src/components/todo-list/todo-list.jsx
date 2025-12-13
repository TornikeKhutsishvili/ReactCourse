import TodoForm from "../todo-form/todo-form";
import ToDo from "../todo/todo";
import TodoDone from "../todo-done/todo-done";
import AppWrapper from "../app-wrapper/AppWrapper";

function TodoList() {
  return (
    <AppWrapper>
      <div className="todo-list-container py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">My To-Do List</h2>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="p-3 bg-white border rounded shadow-sm h-100">
                <TodoForm />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 bg-white border rounded shadow-sm h-100">
                <ToDo />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-3 bg-white border rounded shadow-sm h-100">
                <TodoDone />
              </div>
            </div>
          </div>

        </div>
      </div>
    </AppWrapper>
  );
}

export default TodoList;
