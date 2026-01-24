import { useDispatch } from "react-redux";
import {
  removeTodoAction,
  deferTodoAction,
  doneTodoAction,
} from "../store/todo.actions";

const ButtonGroup = ({ todoId }) => {
  const dispatch = useDispatch();

  return (
    <div className="btn-group">
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeTodoAction(todoId))}
      >
        Remove
      </button>

      <button
        className="btn btn-warning"
        onClick={() => dispatch(deferTodoAction(todoId))}
      >
        Defer
      </button>

      <button
        className="btn btn-success"
        onClick={() => dispatch(doneTodoAction(todoId))}
      >
        Done
      </button>
    </div>
  );
};

export default ButtonGroup;
