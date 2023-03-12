import React from "react";
import { Card, CardContent, CardHeader, IconButton } from "@mui/material";
import { Home } from "@mui/icons-material";
import { useTodo } from "../hooks/useTodo";
import { useRouter } from "../hooks/useRouter";
import Layout from "../components/Layout";

const TodoDetail: React.FC = () => {
  const { navigateTo } = useRouter();
  const params = new URLSearchParams(window.location.search);
  const todoID = Number(params.get("id"));
  const handleClick = () => navigateTo("/");
  const { todo } = useTodo(todoID);

  if (!todo) {
    navigateTo("/");
    return null;
  }

  const { id, title, description } = todo;
  return (
    <Layout>
      <Card>
        <CardHeader
          action={
            <IconButton aria-label="back" onClick={handleClick}>
              <Home />
            </IconButton>
          }
          title={`${id}#: ${title}`}
        />
        <CardContent>{description}</CardContent>
      </Card>
    </Layout>
  );
};

export default TodoDetail;
