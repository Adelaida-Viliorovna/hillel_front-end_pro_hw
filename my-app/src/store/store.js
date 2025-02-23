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