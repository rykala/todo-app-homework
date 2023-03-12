import React from "react";
import { List, Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import { useTodos } from "../../hooks/useTodos";
import TodoListItem from "./TodoListItem";
import { ApiStatus } from "../../constants/ApiStatus";
import Layout from "../../components/Layout";

const TodoList: React.FC = () => {
  const { status, error, todos } = useTodos();

  const renderItems = () => {
    if (status === ApiStatus.FETCHING) {
      return (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      );
    }

    if (status === ApiStatus.ERROR) {
      return error;
    }

    return (
      <List>
        {todos?.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </List>
    );
  };

  return (
    <Layout>
      <Card>
        <CardHeader title="Todo app" />
        <CardContent>{renderItems()}</CardContent>
      </Card>
    </Layout>
  );
};

export default TodoList;
