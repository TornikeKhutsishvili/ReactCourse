import { TODO_ACTIONS } from "./todo.action.keys";

export const addTodoAction = (payload) => ({
  type: TODO_ACTIONS.ADD_TODO,
  payload,
});

export const doneTodoAction = (payload) => ({
  type: TODO_ACTIONS.DONE_TODO,
  payload,
});

export const deferTodoAction = (payload) => ({
  type: TODO_ACTIONS.DEFER_TODO,
  payload,
});

export const removeTodoAction = (payload) => ({
  type: TODO_ACTIONS.REMOVE_TODO,
  payload,
});
