import { createAction, createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const fetchTodosRequest = createAction("api/fetchTodos");
export const addTodoRequest = createAction("api/addTodo");
export const removeTodoRequest = createAction("api/removeTodo");
export const clearTodosRequest = createAction("api/clearTodos");
export const toggleCompleteTodoRequest = createAction("api/toggleCompleteTodo");

const apiSlice = createSlice({
  name: "api",
  initialState: {
    result: [],
    todos: [],
    error: null,
    loading: false,
  },
  reducers: {
    fetchInfoStart(state) {
      state.loading = true;
      state.error = null;
    },
    setInfo(state, action) {
      state.result = action.payload;
      state.loading = false;
    },
    fetchInfoError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearInfo(state) {
      state.result = [];
      state.error = null;
    },
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
      const todo = state.todos.find((todo) => todo._id === action.payload.id);
      if (todo) todo.completed = action.payload.completed;
    },
  },
});

export const {
  fetchInfoStart,
  setInfo,
  fetchInfoError,
  clearInfo,
  setTodos,
  addTodo,
  removeTodo,
  clearTodos,
  toggleComplete,
} = apiSlice.actions;

export const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
