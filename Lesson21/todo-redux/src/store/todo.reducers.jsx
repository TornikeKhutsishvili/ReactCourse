import { TODO_ACTIONS } from "./todo.action.keys";

const loadFromLocalStorage = () => {
  try {
    const serialized = localStorage.getItem("todoState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

const initialState = loadFromLocalStorage() || {
  todoList: [],
  deferList: [],
  doneList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case TODO_ACTIONS.DEFER_TODO: {
      const todo = state.todoList.find((t) => t.id === action.payload);
      if (!todo) return state;

      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.payload),
        deferList: [...state.deferList, todo],
      };
    }

    case TODO_ACTIONS.DONE_TODO: {
      const todo = state.todoList.find((t) => t.id === action.payload);
      if (!todo) return state;

      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.payload),
        doneList: [...state.doneList, todo],
      };
    }

    case TODO_ACTIONS.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((t) => t.id !== action.payload),
      };

    default:
      return state;
  }
};
