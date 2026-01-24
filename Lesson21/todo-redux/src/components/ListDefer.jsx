import { useSelector } from "react-redux";

const ListDefer = () => {
  const { deferList } = useSelector((state) => state.todo);

  return (
    <>
      <div className="list-done">
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Todo Defer</strong>
          </li>

          {deferList.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item list-group-item-warning"
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

export default ListDefer;
