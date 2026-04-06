import React from 'react';
import useFetchTodos from '../../../core/hooks/queries/todos/useFetchTodos';
import ErrorPage from '../ErrorPage';
import TodoList from '../../../shared/components/todos/TodoList';

const TodosPage: React.FC = () => {
  const { data: todos, error, isLoading } = useFetchTodos();

  if (error) return <ErrorPage />;
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/loading.gif" alt="loading" className="w-16 h-16" />
      </div>
    );

  return (
    <TodoList todos={todos} />
  );
};

export default TodosPage;