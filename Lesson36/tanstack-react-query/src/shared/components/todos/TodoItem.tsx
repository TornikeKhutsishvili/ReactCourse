import React from "react";
import { useNavigate } from "react-router-dom";

interface TodoItemProps {
  id: number,
  title: string,
  completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, completed, title }) => {
  const navigate = useNavigate();

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
            completed ? "bg-green-500 border-green-500" : "border-gray-400"
          }`}
        >
          {completed && <span className="text-white text-xs">✔</span>}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className={`text-sm font-medium ${completed ? "line-through text-gray-400" : "text-gray-800"}`}>
          {title}
        </h3>

        <p className={`text-xs mt-1 ${completed ? "text-green-600" : "text-yellow-600"}`}>
          {completed ? "Completed" : "Pending"}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;