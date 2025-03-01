import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, List, ListItem, Checkbox, Typography, Box } from "@mui/material";

const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.api.todos);

  useEffect(() => {
    dispatch(fetchTodosRequest());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (text.trim().length >= 5) {
      dispatch(addTodoRequest(text));
      setText("");
    } else {
      alert("Завдання повинно містити щонайменше 5 символів.");
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodoRequest(id));
  };

  const handleClearTodos = () => {
    dispatch(clearTodosRequest());
  };

  const handleToggleComplete = (id, completed) => {
    dispatch(toggleCompleteTodoRequest({ id, completed: !completed }));
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4">TODO</Typography>

      <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="New Todo"
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Додати
        </Button>
      </Box>

      <Typography variant="h6" sx={{ marginTop: 2 }}>
        TODOS
      </Typography>

      <List>
        {todos.map((todo) => (
          <ListItem key={todo._id} sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo._id, todo.completed)}
            />
            <Typography
              sx={{
                textDecoration: todo.completed ? "line-through" : "none",
                flexGrow: 1,
              }}
            >
              {todo.text}
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleRemoveTodo(todo._id)}
              color="error"
            >
              Видалити
            </Button>
          </ListItem>
        ))}
      </List>

      <Typography variant="body1">Всього: {todos.length}</Typography>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleClearTodos}
        sx={{ marginTop: 2 }}
      >
        Очистити
      </Button>
    </Box>
  );
};

export default TodoList;
