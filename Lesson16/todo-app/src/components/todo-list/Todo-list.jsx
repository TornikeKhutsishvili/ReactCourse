import ToDo from "../todo/Todo";
import TodoProgress from "../todo-progress/Todo-progress";
import TodoDone from "../todo-done/Todo-done";

function TodoList() {
  return (
    <>
      <div className="todo-list-container py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">My To-Do List</h2>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="p-2 bg-white border rounded shadow-sm h-100">
                <ToDo />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-2 bg-white border rounded shadow-sm h-100">
                <TodoProgress />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-2 bg-white border rounded shadow-sm h-100">
                <TodoDone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
