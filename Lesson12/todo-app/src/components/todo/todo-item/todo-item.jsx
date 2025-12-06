import State from "../../state";

function TodoItem({ id, exercise, onDone }) {

  const Done = () => {
    State.markDone(id);
    onDone();
  };

  const Delete = () => {
    State.removeExercise(id);
    onDone();
  };

  return (
    <tr>
      <td>{exercise}</td>
      <td className="text-end">
        <button className="btn btn-success me-2" onClick={Done}>
          done
        </button>
        <button className="btn btn-danger" onClick={Delete}>
          delete
        </button>
      </td>
    </tr>
  );

}

export default TodoItem;
