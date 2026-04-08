import { useQuery } from "@tanstack/react-query";
import fetchTodos from "../../../api/todo/fetchTodos.api";
import type { ITodo } from "../../../interfaces/todo.interface";

const useFetchTodos = () => {
  const result = useQuery<ITodo[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return result;
};

export default useFetchTodos;