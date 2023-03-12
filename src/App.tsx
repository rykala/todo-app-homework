import React from "react";
import { TodosProvider } from "./context/TodosContext";
import { RouterProvider } from "./context/RouterContext";
import TodoDetail from "./pages/TodoDetail";
import TodoList from "./pages/TodoList";
import Route from "./components/Route";

function App() {
  return (
    <RouterProvider>
      <TodosProvider>
        <Route path="/detail" component={TodoDetail} />
        <Route path="/" component={TodoList} />
      </TodosProvider>
    </RouterProvider>
  );
}

export default App;
