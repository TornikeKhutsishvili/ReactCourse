import { useQuery } from "@tanstack/react-query";
import fetchTodo from "../../../api/todo/fetchTodo.api";
import type { ITodo } from "../../../interfaces/todo.interface";

const useFetchTodo = (id: number) => {
  const result = useQuery<ITodo>({
    queryKey: ['todo', id],
    queryFn: () => fetchTodo(id),
  });

  return result;
}

export default useFetchTodo;