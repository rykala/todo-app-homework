import { useContext, useEffect, Dispatch } from "react";
import { ApiStatus } from "../constants/ApiStatus";
import { TodosContext, Todo } from "../context/TodosContext";

const fetchTodos = async (
  dispatch: Dispatch<{ type: ApiStatus; data?: Todo[]; error?: string }>
) => {
  dispatch({ type: ApiStatus.FETCHING });

  const response = await fetch("/todos");
  if (response.ok) {
    const data = await response.json();
    dispatch({ type: ApiStatus.SUCCESS, data });
  } else {
    const errorMessage = await response.text();
    dispatch({ type: ApiStatus.ERROR, error: errorMessage });
  }
};

export const useTodos = (): {
  status: ApiStatus;
  refetch: () => void;
  todos?: Todo[];
  error?: string;
} => {
  const { state, dispatch } = useContext(TodosContext);
  const { status, data, error } = state;
  const refetch = () => fetchTodos(dispatch);

  useEffect(() => {
    fetchTodos(dispatch);
  }, [dispatch]);

  return { status, refetch, todos: data ?? [], error };
};
