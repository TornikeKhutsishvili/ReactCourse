import { useSelector } from "react-redux";

const ListDone = () => {
  const { doneList } = useSelector((state) => state.todo);

  return (
    <>
      <div className="list-done">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Todo Done</strong>
          </li>

          {doneList.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item list-group-item-success"
            >
              <span>ID: {todo.id}</span>
              <span className="mx-5">Description: {todo.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListDone;
