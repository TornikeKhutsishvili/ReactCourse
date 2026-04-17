import React, { type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import useDeleteTodo from "../../../core/hooks/mutations/todo/useDeleteTodo";

interface TodoItemProps {
  id: number,
  title: string,
  description: string,
  isCompleted: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, description, title, isCompleted }) => {
  const { mutate } = useDeleteTodo()
  const navigate = useNavigate();

  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    mutate(id)
  }

  return (
    <div key={id} onClick={() => navigate(`/todos/${id}`)}
      className="
        bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 border border-gray-100
        flex items-start gap-3 hover:cursor-pointer
      "
    >
      {/* Checkbox */}
      <div className="mt-1">
        <div className={`w-5 h-5 rounded border flex items-center justify-center ${
            isCompleted ? "bg-green-500 border-green-500" : "border-gray-400"
          }`}
        >
          {isCompleted && <span className="text-white text-xs">✔</span>}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className={`text-sm font-medium ${isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>
          {title}
        </h3>
        <h3 className={`text-sm font-medium ${isCompleted ? "line-through text-gray-400" : "text-gray-800"}`}>
          {description}
        </h3>

        <p className={`text-xs mt-1 ${isCompleted ? "text-green-600" : "text-yellow-600"}`}>
          {isCompleted ? "Completed" : "Pending"}
        </p>

        <button type="button" onClick={(e) => handleDelete(e, id)}
          className="absolute p-3 text-red-700 top-2 right-2 border border-gray-300"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
