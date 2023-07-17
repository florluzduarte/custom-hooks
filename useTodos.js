import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] delete todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] toggle todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todoCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
  };
};
