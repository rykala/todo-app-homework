import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { useRouter } from "../../hooks/useRouter";

const TodoListItem: React.FC<{ id: number; title: string }> = ({
  id,
  title
}) => {
  const { navigateTo } = useRouter();
  const handleOnClick = () => {
    navigateTo(`/detail?id=${id}`);
  };

  return (
    <ListItem button onClick={handleOnClick}>
      <ListItemText primary={`#${id}: ${title}`} />
    </ListItem>
  );
};

export default TodoListItem;
