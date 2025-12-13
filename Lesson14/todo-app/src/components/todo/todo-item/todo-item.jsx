import { memo } from "react";
import State from "../../state";

const TodoItem = memo(
  function TodoItem({ id, exercise, done }) {
    console.log("render TodoItem");

    const handleDone = () => {
      State.markDone(id);
      console.log("click handleDone in TodoItem");
    };

    const handleDelete = () => {
      State.removeExercise(id);
      console.log("click handleDelete in TodoItem");
    };

    return (
      <tr>
        <td>{exercise}</td>
        <td className="text-end">
          <button className="btn btn-success me-2" onClick={handleDone} disabled={done}>
            done
          </button>

          <button className="btn btn-danger" onClick={handleDelete}>
            delete
          </button>
        </td>
      </tr>
    );
  },
  (prevProps, nextProps) => {
    console.log("memo compare TodoItem");
    return (
      prevProps.exercise === nextProps.exercise &&
      prevProps.done === nextProps.done
    );
  }
);

export default TodoItem;
