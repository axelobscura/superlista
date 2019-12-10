// Todos

// all methods to interact with todos
import React, {createContext} from "react";
import useTodoState from '../hooks/useTodoState';
const defaultTodos = [
  { id: 1, task: 'Wow the loan using goats', completed: 'false'},
  { id: 2, task: 'Release crocodiles in the garden', completed: 'true'}
]

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  )
}