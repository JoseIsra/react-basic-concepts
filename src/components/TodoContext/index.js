import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    sincronizeItem: sincronizeTodos,
    loading,
  } = useLocalStorage("TODOS_V1", []);
  const totalTodos = todos.length;
  const [completedTodos, setCompletedTodos] = useState(
    todos.filter((todo) => todo.completed).length
  );

  const completeTodo = (todoId, completed) => {
    const item = todos.find((l) => l.id === todoId);
    item.completed = completed;
    saveTodos(todos);
    setCompletedTodos((prev) => {
      return todos.filter((todo) => todo.completed).length;
    });
  };

  const deleteTodo = (todoId) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === todoId);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };

  return {
    todos,
    totalTodos,
    completeTodo,
    completedTodos,
    deleteTodo,
    loading,
    saveTodos,
    sincronizeTodos,
  };
};

export { useTodos };
