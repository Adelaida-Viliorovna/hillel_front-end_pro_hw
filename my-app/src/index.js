// my-app\src\index.js

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://adelaidaviliorovna:HZufYntEy4yIznvo@cluster0.77ibg.mongodb.net/todolist"
    );
    console.log("DB IS ONLINE");
  } catch (err) {
    console.error("Error connecting to the database", err);
    process.exit(1);
  }
};

connectToDB();

const Schema = mongoose.Schema;

const TodosSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

const TodoModel = mongoose.model("Todos", TodosSchema);

app.get("/", (req, res) => {
  res.send(`Server is running on http://localhost:${port}`);
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Error fetching todos", error: err });
  }
});

app.post("/todos", async (req, res) => {
  try {
    const todo = new TodoModel(req.body);
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: "Error creating todo", error: err });
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Error fetching todo", error: err });
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: "Error updating todo", error: err });
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);
    if (!deletedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted successfully", deletedTodo });
  } catch (err) {
    res.status(500).json({ message: "Error deleting todo", error: err });
  }
});

app.delete("/todos", async (req, res) => {
  try {
    await TodoModel.deleteMany({});
    res.json({ message: "All todos deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting all todos", error: err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});