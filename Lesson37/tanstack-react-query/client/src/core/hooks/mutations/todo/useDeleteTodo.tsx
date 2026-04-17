import { useMutation } from "@tanstack/react-query";
import deleteTodo from "../../../api/todo/deleteTodo";
import { client } from "../../../tanstack/client";

const useDeleteTodo = () => {
  const result = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onError: (err) => console.log(err),
    onSuccess() {
        client.invalidateQueries({
            queryKey: ['todos']
        })
    },
  })

  return result;
}

export default useDeleteTodo;
