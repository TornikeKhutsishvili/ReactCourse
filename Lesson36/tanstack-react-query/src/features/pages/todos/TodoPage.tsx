import React from 'react'
import useFetchTodo from '../../../core/hooks/queries/todos/useFetchTodo';
import ErrorPage from '../ErrorPage';
import { useParams } from 'react-router-dom';
import TodoItem from '../../../shared/components/todos/TodoItem';

const TodoPage:React.FC = () => {
  const { id } = useParams()
  const { data: todo, error, isLoading } = useFetchTodo(Number(id!))

  if (error) return <ErrorPage />;
  if (isLoading) return (
      <div className="flex justify-center items-center h-screen">
        <img src="/loading.gif" alt="loading" className="w-16 h-16" />
      </div>
    );
  if (!todo) return <p>No data</p>;

  return (
    <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
  )
}

export default TodoPage;