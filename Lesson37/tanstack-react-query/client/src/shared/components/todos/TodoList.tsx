import React from "react";
import type { ITodo } from "../../../core/interfaces/todo.interface";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: ITodo[] | undefined;
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todos</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {todos?.map(({ id, completed, title }: ITodo) => (
          <TodoItem key={id} id={id} completed={completed} title={title} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;