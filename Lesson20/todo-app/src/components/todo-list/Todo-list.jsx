import ToDo from "../todo/Todo";
import TodoProgress from "../todo-progress/Todo-progress";
import TodoDone from "../todo-done/Todo-done";
import { useLanguage } from "../../context/LanguageContext";

function TodoList() {
  const { translations } = useLanguage();

  return (
    <>
      <div className="todo-list-container py-5">
        <div className="container">
          <h2 className="text-center mb-4">
            {translations.todoList.MyToDoList}
          </h2>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="p-2 border rounded shadow-sm h-100">
                <ToDo />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-2 border rounded shadow-sm h-100">
                <TodoProgress />
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-2 border rounded shadow-sm h-100">
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
