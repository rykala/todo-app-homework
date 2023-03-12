import React, { createContext, useReducer } from "react";
import { ApiStatus } from "../constants/ApiStatus";

export type Todo = {
  id: number;
  title: string;
  description: string;
};

type Todos = {
  status: ApiStatus;
  error?: string;
  data?: Todo[];
};

const initialState: Todos = {
  status: ApiStatus.IDLE,
  error: undefined,
  data: undefined
};

const TodosContext = createContext<{
  state: Todos;
  dispatch: React.Dispatch<{ type: ApiStatus; data?: Todo[]; error?: string }>;
}>({
  state: initialState,
  dispatch: () => null
});

const apiReducer = (
  state: Todos,
  action: { type: ApiStatus } & Pick<Todos, "error" | "data">
) => {
  switch (action.type) {
    case ApiStatus.ERROR: {
      return {
        ...state,
        status: ApiStatus.ERROR,
        error: action.error
      };
    }
    case ApiStatus.SUCCESS: {
      return {
        ...state,
        status: ApiStatus.SUCCESS,
        data: action.data
      };
    }
    case ApiStatus.FETCHING: {
      return {
        ...state,
        status: ApiStatus.FETCHING
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const TodosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};

export { TodosContext, TodosProvider };
