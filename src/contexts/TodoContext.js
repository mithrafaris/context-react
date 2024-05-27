import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
