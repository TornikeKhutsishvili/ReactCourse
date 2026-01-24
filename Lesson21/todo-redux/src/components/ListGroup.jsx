import { useSelector } from "react-redux";
import ButtonGroup from "./ButtonGroup";

const ListGroup = () => {
  const { todoList } = useSelector((state) => state.todo);

  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Todo List</strong>
        </li>

        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>ID: {todo.id}</span>
            <span>Description: {todo.description}</span>
            <ButtonGroup todoId={todo.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
