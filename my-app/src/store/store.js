// my-app\src\store\store.js

import axios from "axios";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    clearTodos(state) {
      state.todos = [];
    },
    toggleComplete(state, action) {
      const todo = state.todos.find(todo => todo._id === action.payload.id);
      if (todo) todo.completed = action.payload.completed;
    },
  },
});

export const { setTodos, addTodo, removeTodo, clearTodos, toggleComplete } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);


// const todoSlice = createSlice({
//   name: "todos",
//   initialState: {
//     todos: [],
//   },
//   reducers: {
//     SET_TODOS(state, action) {
//       state.todos = action.payload;
//     },
//     ADD_TODO(state, action) {
//       state.todos = [...state.todos, action.payload];
//     },
//     REMOVE_TODO(state, action) {
//       state.todos = state.todos.filter((todo) => todo._id !== action.payload);
//     },
//     CLEAR_TODOS(state) {
//       state.todos = [];
//     },
//   },
// });
// export const { SET_TODOS, ADD_TODO, REMOVE_TODO, CLEAR_TODOS } =
//   todoSlice.actions;
// export const fetchTodos = () => async (dispatch) => {
//   const response = await axios.get("http://localhost:3000/todos");
//   dispatch(SET_TODOS(response.data));
// };
// export const addTodo = (text) => async (dispatch) => {
//   const response = await axios.post("http://localhost:3000/todos", { text });
//   dispatch(ADD_TODO(response.data));
// };
// export const removeTodo = (id) => async (dispatch) => {
//   await axios.delete(`http://localhost:3000/todos/${id}`);
//   dispatch(REMOVE_TODO(id));
// };
// export const clearTodos = () => async (dispatch) => {
//   await axios.delete("http://localhost:3000/todos");
//   dispatch(CLEAR_TODOS());
// };
// export const completeTodo = (id, completed) => async (dispatch) => {
//   const response = await axios.put(`http://localhost:3000/todos/${id}`, {
//     completed,
//   });
//   dispatch(fetchTodos());
// };
// export const store = configureStore({
//   reducer: {
//     todos: todoSlice.reducer,
//   },
// });
