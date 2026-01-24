import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/todo.actions";

const CreatePage = () => {
  const [description, setDescription] = useState("");
  const [nextId, setNextId] = useState(() => {
    const saved = localStorage.getItem("nextTodoId");
    return saved ? Number(saved) : 1;
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nextId,
      description,
      isCompleted: false,
    };

    dispatch(addTodoAction(newTodo));

    const updatedId = nextId + 1;
    setNextId(updatedId);
    localStorage.setItem("nextTodoId", updatedId.toString());

    setDescription("");
  };

  return (
    <>
      <div className="create-page-wrapper">
        <div className="container my-5">
          <div className="input-group">
            <form className="input-group" onSubmit={onSubmit}>
              <Input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
