import { useContext } from "react";
import { TodosContext, Todo } from "../context/TodosContext";

export const useTodo = (todoID: number): { todo?: Todo } => {
  const {
    state: { data: todos }
  } = useContext(TodosContext);

  const todo = todos?.find(({ id }) => id === todoID);

  return { todo };
};
